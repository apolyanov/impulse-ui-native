# Component authoring conventions

Use this reference when adding or changing components, public props, theme
tokens, or Storybook documentation.

## Platform scope

Design and implement public components for native iOS and Android. Do not add
web-specific props, DOM behavior, hover/focus-visible styling, browser keyboard
models, or React Native Web workarounds unless the user explicitly requests web
scope. Preserve harmless compatibility with the existing web preview when it
comes for free, but do not treat web parity as an acceptance criterion. Built-in
accessibility semantics are also deferred: do not add accessibility props,
screen-reader behavior, examples, or tests unless explicitly requested.

Reduced motion is deferred for all components for now. Do not plan or add
reduced-motion detection, animation alternatives, props, examples, tests, or
acceptance criteria unless the user explicitly requests that scope.

## Decide package ownership first

- `primitives/src/components/atoms`: broadly reusable token-aware layout,
  typography, and interaction building blocks.
- `primitives/src/components/controls`: the compound rectangular-field system:
  Provider, Root, Label, Container, Addon, Input, Placeholder, Value, Loader,
  and Error. It is infrastructure for higher-level fields, not the home of all
  form controls.
- Dedicated package: a component with meaningful state, group behavior,
  dependencies, or an independently useful install surface. Existing examples
  are input, select, datetime, flyout, skeleton, and stepper.
- Existing domain package: variants that share a domain model and helpers, such
  as all charts or all date/time pickers.

For example, a checkbox with checked/indeterminate behavior and a checkbox
group belongs in a dedicated `checkbox` package, using primitives and theme,
rather than inside the compound Control directory.

## Typical public package shape

```text
packages/<name>/
  src/
    components/
      <name>.tsx
      index.ts
    hooks/                 only when behavior warrants extraction
    constants/             module-level constants when needed
    types/
      <name>.types.ts
      index.ts
    utils/                 pure domain helpers when needed
    index.ts
  CHANGELOG.md
  LICENSE
  README.md
  package.json
  tsconfig.json
  tsup.config.ts
```

Use lowercase kebab-case filenames. Existing suffixes communicate role:
`.hook.ts`, `.types.ts`, `.utils.ts`, `.constants.ts`, `.provider.tsx`, and
`.context.ts`.

Export through the nearest barrel and then the package root. Re-export from
`toolkit/src/index.ts` only when the component belongs in the aggregate API.

## Component implementation pattern

- Use `condition ? <Component /> : null` for conditional JSX, with the component
  in the true branch. Do not conditionally render with `&&`, `||`, or `??`.
  Render custom content directly and show the default with a separate nullish
  check and a ternary ending in `null`, preserving supplied falsy content.
- Keep each React component in its own file. Do not define multiple components
  in one module, including private implementation children.
- A compound `Parent.Child` public API is allowed when the parts form a
  coherent composition model. Implement every part in its own component file,
  then assemble the namespace through the component barrel or a dedicated
  composition module.
- Do not declare non-component functions in a component file. The only
  exception is the `themedStyles` function used by `useThemedStyles`, which may
  remain at module scope in the component file. Keep callbacks and
  render-specific functions inside the component; move every other reusable
  pure helper to a focused file under the owning package's `utils` directory.
- Apart from the component export itself, do not declare module-level constants
  in a component file. Put all constants in focused `.constants.ts` files under
  the owning package's `constants` directory and import them where needed. Name
  constants declared in those constant modules in PascalCase (`DefaultMin`,
  not `DEFAULT_MIN`). Ordinary bindings such as configuration objects, static
  style sheets, fixture data, and Storybook metadata continue to use camelCase.
  Preserve identifiers required by external frameworks or generated code.
- Use named function expressions wrapped with `memo` for public components:
  `export const Name = memo(function Name(...) { ... })`.
- Destructure defaults near the component entry. Existing defaults commonly use
  `size = "medium"` and `variant = "outlined"` or `"filled"` according to the
  component.
- Keep prop contracts in the package `types` directory and export public types.
- Extend React Native props and shared primitive/theme props rather than
  duplicating them.
- Use `useControllableState` from `core` when both `value`/`onChange` and
  `defaultValue` are supported.
- Use `useEventCallback` for stable handlers that need current values.
- Follow the repository's `hook-ordering` skill when writing React components.
- Use React Native `StyleSheet` and token-aware style hooks for library code.
- Always use `react-native-reanimated` for component animations and animation
  hooks. Drive animated styles/props with shared values, cancel animations on
  cleanup, and use the installed Worklets API for callbacks into React state
  and lifecycle handlers. Do not use React Native's `Animated` or
  `LayoutAnimation` for component animations.
- Build token-dependent React Native styles with `useThemedStyles` and a
  module-level `themedStyles(theme, props)` factory in the component file. This
  style factory is the sole exception to the rule against functions outside a
  component. Use `useComponentsTokens` directly only for non-style values,
  token-aware primitive props, or animated worklet styles that cannot be
  created by `useThemedStyles`.
- Preserve iOS and Android behavior. Existing React Native Web behavior may be
  retained when incidental, but new web behavior is out of scope by default.

## Theme integration

Primitive tokens live in `PrimitiveThemeTokens`; component-specific tokens
live in `ComponentsTokens` and are produced by factories in
`packages/theme/src/theme/create-*-tokens.ts`.

For a new themed component:

1. Add a focused token type under `packages/theme/src/types`.
2. Export the type from the types barrel.
3. Add a token factory under `packages/theme/src/theme`.
4. Add the property to `ComponentsTokens`.
5. Wire the factory into `createComponentsTokens` in `tokens.theme.ts`.
6. Consume it through `useTheme`, `useComponentsTokens`, or `useThemedStyles`.
7. Document meaningful customization and show light/dark states.

The shared scales are deliberately small:

- component sizes: `small`, `medium`, `large`;
- variants: `filled`, `outlined`, `soft`, `ghost`, `plain`;
- control/button heights: 32, 40, 48;
- icon sizes: 18, 24, 30;
- spacing follows a 4-based scale: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96;
- radii: 4, 8, 16, 32, 64, 128, and a round sentinel.

Reuse only the size/variant axes that make semantic sense. Do not force every
component to implement every visual variant.

## Compound components and providers

Follow Input's composition model. Composable parts render their supplied
children and own their styling and behavior. The public convenience component
assembles the default icons, text, content, and actions from those parts. Do not
embed automatic fallback content in child-only composable parts.

Use compound components when parts need to share state and composition matters,
as with `Control` and `Skeleton`. Keep internal parts private unless direct
composition is an intended public capability.

Put every child component in a focused file under the owning component's
directory. Assemble public child APIs through a namespaced object such as
`Card.Title`; keep private implementation children unexported from the public
namespace and package barrels.

Create external stores once outside render. Portal and overlay stores expose
stable snapshot/subscription APIs and are installed through providers. Complex
overlay components expect the app root to include Gesture Handler, safe-area,
ThemeProvider, OverlayProvider/Host, and PortalProvider/Host as applicable.

## Storybook documentation

Stories live in `packages/storybook/src/stories/<component>/` and are discovered
by the configured Storybook hosts. The native host is authoritative. The
established three-file pattern is:

```text
<component>.stories.tsx        metadata, controls, and named story exports
<component>.examples.tsx       typed example definitions and renderers
<component>.documentation.tsx  long-form usage guidance
```

Use `satisfies Meta<typeof Component>`, `StoryObj<typeof meta>`, shared size and
variant options, and `createStoryDescription`. Keep examples useful in the
native Storybook host. Cover defaults, sizes, variants, disabled/loading/error
states, controlled behavior, and important composition—not only a happy path.

Update the package README with installation, peer setup, main exports, a minimal
example, and behavioral constraints. Update `docs/component-roadmap.md` when a
component is added or its maturity changes.

## Dependencies and peers

- Declare every directly imported workspace package in `dependencies`.
- Put host-provided native/runtime libraries in `peerDependencies` and include
  compatible development entries when needed to build locally.
- Mirror required peers in the toolkit when its re-exported surface requires
  consumers to install them.
- Add shared versions to the workspace catalog instead of scattering versions.
- Check direct-install usability; do not assume every consumer installs the
  toolkit.

## Review checklist

- Public types and exports are reachable from intended entrypoints.
- No package imports the toolkit as an implementation dependency.
- Visual values come from the theme unless intrinsically data-driven.
- Controlled and uncontrolled behavior does not switch accidentally.
- Disabled state blocks interaction.
- Touch targets, visible labels, RTL, and font scaling were considered.
- Native stories render with required providers.
- README, roadmap, dependency metadata, and Changeset match the change.
