# Build with ImpulseUI Native

Start here when choosing components or generating a native screen. These references cover repository source for all public library packages. Check `snapshot.json` and your installed package versions before copying code into another application.

## Read only what the task needs

1. Choose a package with [component-chooser.md](component-chooser.md). Use the component's role: Input enters text, Select chooses options, Tabs switches panels, SegmentedControl chooses a value, and Stepper coordinates a controlled flow.
2. Open that package's `capabilities/<package>.md`. It combines source-derived props/defaults with authored setup and composition guidance. Read its boundaries before writing JSX.
3. Start from a matching [recipe](recipes.md). Source files under `recipes/` are typechecked against public APIs and can be copied together with their referenced helper files. `app-shell.tsx` demonstrates provider/store setup; it assumes configured native peers and loaded fonts.
4. Inspect [visual-reference.md](visual-reference.md) and the owning native Storybook example. `visual-matrix.json` lists finite appearance/state review cases. Capture status is explicit: a runnable story or a successful typecheck is not a screenshot or native approval.
5. Open `api/<package>.md` only for exact inherited native props, generic/discriminated contracts, token customization or details omitted from the compact catalog. Use [design-context.md](design-context.md) for visual foundations and [token-reference.md](token-reference.md) for resolved values.

Do not paste the full source appendix or entire machine catalog into a prompt by default. The local query tool returns just the matching contract:

```sh
node scripts/query-design-system.mjs --search "range"
node scripts/query-design-system.mjs --package input --component Input
node scripts/query-design-system.mjs --package datetime --component DatePicker --prop variant
node scripts/query-design-system.mjs --package select --recipes
```

Without a repository checkout, load `capabilities/<package>.json` for one package, or inspect `capabilities.json` by package name and public component name. Its schema is [capabilities.schema.json](capabilities.schema.json). `source/package-guidance.json` contains authored behavioral rules; `source/recipe-index.json` connects packages, runnable examples, stories and screenshot status.

## Do not infer a uniform API

- Only pass a prop when the component contract supports it. There is no universal variant/tone axis. Progress variants are linear/circular; icon variants are glyph weights; Toast tones are feedback states; Tabs has a tone and no filled/outlined/soft variant.
- Defaults follow roles. Fields use medium/outlined/neutral. Buttons and accent controls generally use medium/filled/primary. Divider uses tone="default". Read the exact component defaults, not a package-wide assumption.
- A missing extracted default means unresolved or inherited, not unsupported. `defaultResolution` and authored `inheritedDefaults` distinguish those cases. Dynamic expressions remain expressions, not guessed values.
- Native and style props are inherited differently. The compact record includes library props, key native input props and supported style-prop names; consult the exact API for other native props. When `openChoices` is true, listed strings are only literal branches of a wider type (for example numeric icon sizes or indeterminate plus boolean checks). Abbreviated type displays are marked and are not a substitute for the full declaration.
- Match the actual value contract: text uses onChangeText; check controls use checked/onCheckedChange; Select uses value/onChange; Pagination uses page/onPageChange. Generic and discriminated modes remain subject to the actual TypeScript type.

## Compose deliberately

Convenience components assemble a common layout. Compound parts let the application supply content and arrange it. A dotted API does not imply that every part is independently usable or that it manufactures text/icons.

Use the documented parent/provider for context-bound parts, especially Accordion, Control, Popover, ColorPicker, Modal and Toast. Card/List parts are mostly presentation and do not own selection. Render text inside Typography when a part merely forwards children to a native View/Pressable. Use child strings directly only where the owning component explicitly wraps text.

Portals move content to another host. Do not assume arbitrary application context follows it; pass or re-provide what the actual component needs. Date/time pickers explicitly pass variant/tone to their inner selects, fields, tags and actions. MultiSelect deliberately uses a different tag variant so selected values remain visible on the field surface.

Custom React node content can own its own foreground styles. Do not expect an action's variant to recolor an arbitrary custom subtree. Use semantic tokens; keep data colors, validation, disabled state and brand appearance distinct.

## Native verification boundary

The current target is iOS/Android. Do not invent browser interactions, built-in accessibility behavior or reduced-motion capabilities that the library has not implemented. Configure required native peers and fonts. Inspect open overlays, keyboard interaction, gestures, long content, both schemes and font scaling on devices before claiming production readiness.

The default light primary palette has documented contrast limitations; identical palettes across components do not certify contrast. See the verification notes in [README.md](README.md).

## Keep the references reliable

After public props, defaults, composition or behavior changes, update authored guidance and relevant recipes, then run:

```sh
pnpm docs:generate
pnpm docs:check
```

Recipe validation runs in a separate TypeScript program so application-specific module augmentation cannot change the cataloged library API. The check typechecks public source and all recipe modules, verifies authored prop/default assertions and package/recipe/story coverage, validates the capability schema and local links, and rejects stale generated files. It does not render native components or verify screenshot contents. Source hashes identify the working-tree inputs; a commit advancing HEAD alone does not invalidate an unchanged contract.
