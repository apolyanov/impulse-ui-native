# ImpulseUI Native: context for designing a new application

For component selection and implementation, start with [agent-guide.md](agent-guide.md), [component-chooser.md](component-chooser.md), and the matching [recipe](recipes.md). This document provides visual foundations; detailed source appendices are lookup material.
This document is a portable design brief for **ImpulseUI Native**, reviewed from the local source on **2026-10-23**, toolkit version **11.3.1**. Use it before designing screens in another project. Exact APIs and all resolved tokens accompany it in this bundle. The source is a React Native library for **iOS and Android**. The repository also has a browser Storybook preview and a Next.js marketing site; neither establishes web feature parity for the library.

The application's product, users, navigation, content, brand changes, and screen layouts are still to be defined. The library supplies components and a visual system rather than a complete application template.

## 1. Design character

The defaults combine a coral/pink brand palette, cool neutral surfaces, Montserrat typography, compact controls, restrained borders, and rounded cards. Light mode uses a pale gray base with white content surfaces. Dark mode uses layered charcoal surfaces and a lighter pink primary color. Use semantic roles so an app changes scheme coherently.

Shared component sizing is `small`, `medium`, and `large`. Buttons and rectangular field containers use heights **32 / 40 / 48**. Icons use **18 / 24 / 30**. Cards have a **16** radius. Buttons, IconButton, and rectangular field containers share an **8** radius (`radii.md`) so fields and actions align visually.

The existing components are the starting point for the design. New screen composition is expected. Features beyond a component's actual contract require application code or library extensions and should be identified in the design.

## 2. Theme architecture and precedence

The theme has three layers:

1. **Primitive scales**: spacing, radii, borders, typography, font families, shadows, and semantic colors.
2. **Component tokens**: factories derive sizes, variants, visual states, surfaces, layout, and motion from the primitive theme.
3. **Component presentation**: components consume tokens and apply their own props, supplied content, and styles.

`ThemeProvider` defaults to `scheme="light"`. The app supplies `"light"` or `"dark"`; the provider does not automatically follow the system scheme. Its actual resolution order is:

```text
LightTheme or DarkTheme
  -> deep merge theme[scheme] overrides
  -> createComponentsTokens(resolved primitive theme)
  -> deep merge components object or components(resolved primitive theme)
  -> AppTheme exposed to descendants
```

Component overrides work in the current source. Changing primitive spacing does not scale every component dimension automatically: some factory dimensions, including button/control heights and icon sizes, are numeric defaults. Override the corresponding component tokens where a redesign needs those dimensions changed.

Many components append `style` after generated defaults. Confirm the owning component when relying on precedence; this is not a universal guarantee for every nested child. Custom content may own its own typography and colors. A button turns a string child into themed text, while a custom React node is rendered as supplied.

The default `AppTheme` JSON files have **40 component token groups** and **2,486 leaf values per scheme**. Typography presets sit outside `components`, in the primitives implementation.

## 3. Semantic colors

For paired colors, `.value` is the main fill/role color and `.contrast` is the associated foreground. Contrast values are explicit design tokens, not computed dynamically. Read `colors.text.*` directly as strings. Neutral steps, `white`, and `black` keep their literal values across schemes.

| Role               | Light value / contrast | Dark value / contrast |
| ------------------ | ---------------------- | --------------------- |
| `primary`          | `#F55D6B` / `#ffffff`  | `#FA9EA7` / `#16191d` |
| `accent`           | `#FA9EA7` / `#16191d`  | `#f55d6b` / `#16191d` |
| `secondary`        | `#FEE7E9` / `#c92a3b`  | `#3b2027` / `#FA9EA7` |
| `surface.subtle`   | `#f1f3f5` / `#16191d`  | `#16191d` / `#ffffff` |
| `surface.canvas`   | `#f1f3f5` / `#16191d`  | `#16191d` / `#ffffff` |
| `surface.default`  | `#ffffff` / `#16191d`  | `#212529` / `#ffffff` |
| `surface.elevated` | `#ffffff` / `#16191d`  | `#343a40` / `#ffffff` |
| `surface.inverse`  | `#000000` / `#ffffff`  | `#ffffff` / `#16191d` |
| `border.subtle`    | `#e9ecef` / `#343a40`  | `#868e96` / `#adb5bd` |
| `border.default`   | `#dee2e6` / `#212529`  | `#adb5bd` / `#f1f3f5` |
| `border.strong`    | `#adb5bd` / `#16191d`  | `#ced4da` / `#ffffff` |
| `border.focus`     | `#c92a3b` / `#ffffff`  | `#FA9EA7` / `#16191d` |
| `feedback.error`   | `#c92a2a` / `#fff5f5`  | `#ff8787` / `#3b1515` |
| `feedback.warning` | `#a65300` / `#fff4e6`  | `#ffc078` / `#3b250f` |
| `feedback.success` | `#526b00` / `#f4fce3`  | `#c0eb75` / `#26320f` |
| `feedback.info`    | `#1864ab` / `#e7f5ff`  | `#74c0fc` / `#102a43` |

| Text role        | Light     | Dark      |
| ---------------- | --------- | --------- |
| `text.primary`   | `#16191d` | `#ffffff` |
| `text.secondary` | `#212529` | `#f1f3f5` |
| `text.tertiary`  | `#343a40` | `#adb5bd` |
| `text.inverse`   | `#ffffff` | `#16191d` |
| `text.disabled`  | `#868e96` | `#868e96` |

`colors.overlay` is `rgba(0, 0, 0, 0.45)` in light mode and `rgba(0, 0, 0, 0.65)` in dark mode. Individual overlays can have their own component backdrop color and visible opacity; Modal and Flyout currently derive their backdrop from `text.tertiary` with opacity **0.4**. Inspect the component group rather than assuming every overlay uses `colors.overlay`.

The common neutral scale is:

| Step | Color     | Step | Color     |
| ---- | --------- | ---- | --------- |
| 0    | `#ffffff` | 7    | `#868e96` |
| 1    | `#f8f9fa` | 8    | `#495057` |
| 2    | `#f1f3f5` | 9    | `#343a40` |
| 3    | `#e9ecef` | 10   | `#212529` |
| 4    | `#dee2e6` | 11   | `#16191d` |
| 5    | `#ced4da` | 12   | `#0d0f12` |
| 6    | `#adb5bd` | 13   | `#000000` |

Use `surface`, `text`, and `border` roles for scheme-adaptive screen styling. When changing brand colors, define both schemes and their foreground pairs. Contrast and readability still need review for the application's actual combinations and text sizes.

Choose surface roles by purpose:

- `surface.canvas`: app and screen backgrounds.
- `surface.subtle`: muted control fills, tracks, and disabled backgrounds.
- `surface.default`: content panels, cards, lists, accordions, and enabled filled fields.
- `surface.elevated`: floating overlays, popovers, sheets, and toasts.
- `surface.inverse`: inverse surfaces such as tooltips.

Canvas and subtle share their default colors but are independent roles. Override `surface.canvas` to restyle screen backgrounds without changing muted control fills. Default and elevated also share a light fill, while dark mode distinguishes content panels from floating surfaces. Use each role's `.contrast` for its paired foreground.

When migrating older themes, replace `surface.primary` with `surface.canvas` for screen backgrounds or `surface.subtle` for muted controls, and replace `surface.secondary` with `surface.default` for content panels. Update custom overrides as well as token reads. Cards, lists, and accordions use `default`; popovers use `elevated`. The brand roles `primary` and `secondary` remain separate from these surface roles.

## 4. Spacing, corners, borders, and elevation

All dimensions below are React Native logical units. Preserve exact token names: spacing `mxs` differs from typography `xsm`.

| Scale           | Names and values                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `space`         | `none: 0`, `xxs: 4`, `xs: 8`, `mxs: 12`, `sm: 16`, `msm: 24`, `md: 32`, `lg: 48`, `xl: 64`, `xxl: 96`                    |
| `radii`         | `sm: 4`, `md: 8`, `lg: 16`, `xl: 32`, `xxl: 64`, `xxxl: 128`, `round: 100000`                                            |
| `borderSize`    | `sm: 1`, `md: 2`, `lg: 3`, `xl: 5`, `xxl: 10`                                                                            |
| `letterSpacing` | `tightest: -1`, `tighter: -0.5`, `tight: -0.25`, `normal: 0`, `wide: 0.25`, `wider: 0.5`, `widest: 0.75`, `ultraWide: 1` |

The round radius is a pill/circle sentinel. Its final shape depends on the element's dimensions.

| Shadow level | Radius | Opacity | Android elevation |
| ------------ | ------ | ------- | ----------------- |
| none         | 0      | 0       | 0                 |
| xs           | 2      | 0.08    | 1                 |
| sm           | 4      | 0.10    | 2                 |
| md           | 8      | 0.15    | 4                 |
| lg           | 16     | 0.18    | 8                 |
| xl           | 24     | 0.22    | 12                |

The default scale is shared by both schemes. The shadow utility uses Android elevation on Android and shadow color/radius/opacity/offset on iOS. Bottom/top offsets use half the radius; `around` uses zero vertical offset. App overrides can change each scheme's scale.

Suggested starting layout choices, **not enforced screen presets**: use 16 or 24 for screen gutters, 8 for closely related items, 16 within sections, and 24 or 32 between sections. Account for safe areas, keyboard layout, and content growth in native screens.

## 5. Typography and fonts

The default font is **Montserrat**, with normal and italic families at weights 100 through 900. Family names follow Expo Google Fonts conventions, for example `Montserrat_400Regular`, `Montserrat_600SemiBold`, and `Montserrat_400Regular_Italic`. The application must load the fonts it uses; installing the library does not load them. `codeFontFamily` defaults to `monospace`.

| Primitive key | Font size | Line height |
| ------------- | --------- | ----------- |
| xxs           | 8         | 12          |
| xs            | 12        | 16          |
| xsm           | 14        | 20          |
| sm            | 16        | 24          |
| md            | 18        | 26          |
| lg            | 20        | 28          |
| xl            | 24        | 32          |
| xxl           | 28        | 36          |
| xxxl          | 32        | 40          |
| huge          | 36        | 44          |
| massive       | 40        | 48          |
| giant         | 48        | 56          |
| colossal      | 56        | 64          |

Weight keys: `thin: 100`, `extraLight: 200`, `light: 300`, `regular: 400`, `medium: 500`, `semiBold: 600`, `bold: 700`, `extraBold: 800`, `black: 900`.

| `Typography` preset | Size / line height | Weight           | Semantic text role   |
| ------------------- | ------------------ | ---------------- | -------------------- |
| DisplayLarge        | 56 / 64            | 700              | primary              |
| DisplayMedium       | 48 / 56            | 700              | primary              |
| DisplaySmall        | 36 / 44            | 600              | primary              |
| Title1              | 32 / 40            | 700              | primary              |
| Title2              | 28 / 36            | 700              | primary              |
| Title3              | 24 / 32            | 600              | primary              |
| Title4              | 20 / 28            | 600              | primary              |
| Title5              | 18 / 26            | 600              | primary              |
| Title6              | 16 / 24            | 600              | primary              |
| Subtitle1           | 18 / 28            | 500              | secondary            |
| Subtitle2           | 16 / 24            | 400              | secondary            |
| BodyLarge           | 18 / 28            | 400              | primary              |
| Body                | 16 / 24            | 400              | primary              |
| BodySmall           | 14 / 20            | 400              | secondary            |
| Caption             | 12 / 16            | 400              | secondary            |
| Label               | 14 / 20            | 500              | primary              |
| Overline            | 12 / 16            | 600              | secondary            |
| Helper              | 14 / 20            | 400              | secondary            |
| Code                | 14 / 20            | regular fallback | primary; code family |
| Quote               | 18 / 28            | 400              | primary; italic      |
| Eyebrow             | 12 / 16            | 500              | secondary            |

`Overline` and `Eyebrow` use uppercase and letter spacing 1. `Master` sets primary text and regular weight but leaves size and line height to supplied styling/native defaults. `numeric` enables tabular numerals. Use named presets to establish hierarchy; component labels can use their own component sizes rather than a preset.

Font families are customizable strings in the theme, but some exported font types name Montserrat specifically. Check the exact contract before introducing a different family. Custom fonts also need a deliberate chart text/font-loading strategy where Skia renders labels.

## 6. Component catalog

The toolkit aggregates the following component families. Each package reference includes its exact public props, namespaces, defaults, and usage examples. Availability here means exported implementation exists; the [status inventory](component-status.md) separates established components from APIs still needing extension or native validation.

| Family                | Components / capability                                                                                 | Detailed reference                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Layout and text       | `View`, `SafeAreaView`, all `Typography` presets, `createPreset`                                        | [primitives](api/primitives.md)                                             |
| Actions               | `Pressable`, `Button`, `IconButton`; disabled and loading feedback                                      | [primitives](api/primitives.md)                                             |
| Icon surfaces         | `IconView`: non-pressable square surfaces, IconButton sizes, Badge variants and tones                   | [icon-view](api/icon-view.md)                                               |
| Identity and metadata | `Avatar`, `Badge`, `Tag`, `Divider`, `Spinner`                                                          | [primitives](api/primitives.md)                                             |
| Cards                 | Convenience `Card` and child-only Root, Pressable, Header, Content, Footer, Media parts                 | [card](api/card.md)                                                         |
| Rows                  | Convenience `List` and Root, Item, Pressable, Leading, Content, Trailing parts                          | [list](api/list.md)                                                         |
| Disclosure            | `Accordion` with compound content and animated expansion                                                | [accordion](api/accordion.md)                                               |
| Scrolling             | `FlatList`, `ScrollView`, initial positioning helpers                                                   | [flat-list](api/flat-list.md), [scroll-view](api/scroll-view.md)            |
| Field foundation      | Compound `Control`: Provider, Root, Label, Container, Addon, Input, Placeholder, Value, Loader, Error   | [primitives](api/primitives.md)                                             |
| Text entry            | `Input`, `Textarea`; addons, validation, loading; textarea count and bounded auto-grow                  | [input](api/input.md)                                                       |
| Field composition     | `FormField`: label, description, required marker, validation and custom-control render prop             | [form-field](api/form-field.md)                                             |
| Choices               | `Checkbox` with indeterminate state; `Radio`; `Switch`                                                  | [checkbox](api/checkbox.md), [radio](api/radio.md), [switch](api/switch.md) |
| Numeric selection     | `Slider`, `RangeSlider`, steps, marks, value bubbles                                                    | [slider](api/slider.md)                                                     |
| Inline selection      | `SegmentedControl`: controlled/uncontrolled selection and overflow options                              | [segmented-control](api/segmented-control.md)                               |
| Option pickers        | `Select`, `MultiSelect` using a Flyout and virtualized options                                          | [select](api/select.md)                                                     |
| Date and time         | `DatePicker`, `DateRangePicker`, `DatetimePicker`, `DatetimeRangePicker`, `TimePicker`                  | [datetime](api/datetime.md)                                                 |
| Colors                | `ColorPicker`: spectrum, hue, alpha, hex/RGB entry, presets, staged Apply/Cancel and compound parts     | [color-picker](api/color-picker.md)                                         |
| Content tabs          | `Tabs`: content-width labels, scroll/clip overflow, active panel rendering                              | [tabs](api/tabs.md)                                                         |
| Paging                | `Pagination`: full and compact page navigation                                                          | [pagination](api/pagination.md)                                             |
| Carousel              | `Carousel`, `CarouselPagination`: native snapping, previews, indicators, buttons                        | [carousel](api/carousel.md)                                                 |
| Workflow              | `Stepper`, `StepperTabsNavigation`                                                                      | [stepper](api/stepper.md)                                                   |
| Progress              | `Progress`: linear/circular, determinate/indeterminate                                                  | [progress](api/progress.md)                                                 |
| Placeholders          | Compound `Skeleton`, shape and control presets                                                          | [skeleton](api/skeleton.md)                                                 |
| Data states           | `LoadingView`, `EmptyView`, `ErrorView`, coordinating `DataView`                                        | [data-state](api/data-state.md)                                             |
| Notifications         | `Toast` and compound parts, placement, stacking, actions, timeout                                       | [toast](api/toast.md)                                                       |
| Dialogs               | `Modal` with Root, Header, Content, Footer, Title, Description; local/global presentation               | [modal](api/modal.md)                                                       |
| Sheets                | `Flyout` and compound parts, top/bottom placement, gestures, opt-in `KeyboardAwareView`                 | [flyout](api/flyout.md)                                                     |
| Anchored content      | Compound `Popover`, `Tooltip`, anchor positioning and safe-area collision handling                      | [popover](api/popover.md)                                                   |
| Charts                | `LineChart`, `MultiLineChart`, `BarChart`, `MultiBarChart`, `PieChart`, `MultiPieChart`                 | [charts](api/charts.md)                                                     |
| Chart composition     | `Bar`, `Grid`, `Label`, `Line`, `Pie`, `XAxis`, `YAxis`; selection, legends and tooltips vary by family | [charts](api/charts.md)                                                     |
| Global presentation   | `Portal`, `PortalHost`, `PortalsHost`, providers/stores; overlay registration and `OverlayHost`         | [portal](api/portal.md), [overlay](api/overlay.md)                          |

Supporting APIs include state/event/timer and Android Back helpers in [core](api/core.md), typed event channels in [echo](api/echo.md), and Axios/TanStack Query factories in [endpoint](api/endpoint.md). The [theme](api/theme.md) supplies tokens, token factories, styling hooks, state resolvers, and public style types. [toolkit](api/toolkit.md) is an aggregation layer.

**Icons are separate from the toolkit.** Import the shared renderer from `@impulse-ui-native/icon` and named wrappers from per-icon paths, such as `@impulse-ui-native/icon/icons/heart`. Weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`. The shared renderer uses themed primary text by default; directly rendered named wrappers need an explicit color. Consult [icon API](api/icon.md) and [icon catalog](icon-catalog.md).

`IconView` is exported from `@impulse-ui-native/icon-view` and toolkit. Pass an
icon component through `icon`; choose `filled`, `outlined`, or `soft` and any
Badge tone. Its small/medium/large containers are 32/40/48, with 18/24/30 icons.
It uses primitives `View` layout and spacing props. Badges and IconView follow
the parent’s cross-axis alignment; use `alignSelf` for individual overrides.

## 7. Variants and visual states

Variant axes belong to component families. The current shared types are:

| Family type        | Variants                              |
| ------------------ | ------------------------------------- |
| `ActionVariant`    | `filled`, `outlined`, `soft`, `ghost` |
| `DisplayVariant`   | `filled`, `outlined`, `soft`          |
| `FieldVariant`     | `filled`, `outlined`, `soft`          |
| `SelectionVariant` | `filled`, `outlined`, `soft`          |

There is no shared `plain` variant in the current source. Check each component's props for the family it supports. `ComponentVariant` is a deprecated alias of `ActionVariant`.

Button and IconButton accept `tone="neutral" | "primary" | "secondary"` independently of `filled`, `outlined`, `soft`, or `ghost`. They default to medium/filled/primary, preserving the existing primary appearances. Filled uses the tone fill/contrast; outlined uses a transparent surface with tone border/content; soft uses a subtle tone surface; ghost uses transparent fill/border with tone content. Primary soft uses secondary fill/contrast; secondary soft uses `subtle.value` / `secondary.contrast`; neutral soft uses `surface.subtle.value` / `text.primary`. Secondary outlined and ghost use `secondary.contrast`. Loading spinners inherit the selected foreground and block interaction; disabled styles are neutral and take precedence over loading. Tokens are explicit `components.button.colors[tone][variant][state]` and `components.iconButton.colors[tone][variant][state]` maps, replacing `variants[variant][state]`. Custom Button children own their foreground styling. Buttons have a 1-unit border and small/medium/large horizontal padding **12 / 16 / 20**, vertical padding **6 / 8 / 10**, and text sizes **14 / 16 / 16**.

Rectangular fields support `outlined`, `soft`, and `filled`, with `tone="neutral" | "primary" | "secondary"`. Default to `outlined` / `neutral`. Outlined uses a transparent surface and tone border; soft uses a subtle tone surface; filled uses the tone fill and its paired foreground. Primary soft uses `colors.secondary`; secondary soft uses `colors.subtle`, while secondary filled uses `colors.secondary` and its contrast. Neutral soft uses `surface.subtle`; neutral filled uses `text.secondary` / `text.inverse`. Keep entered text neutral on outlined/soft surfaces and use tone-aware icons. Validation overrides the tone through `error`; disabled fields are neutral regardless of tone, including disabled errors. Fields use a fixed 1-unit border without a separate focus appearance. Field heights and outer dimensions are shared across appearances; all rectangular fields use `radii.md` (8), matching Button and IconButton. Container horizontal padding is 8; input text sizes are **12 / 14 / 16**. Labels use 14, error text 12, and label/error spacing 4. Customize the shared `controlContainer`, `controlInput`, and `controlAddon` `colors[tone][variant][state]` maps together; they replace the older `variants[variant][state]` maps. All field families, including Select/MultiSelect, date/time pickers, and ColorPicker input parts, share this appearance contract.

Shared state maps include:

- Actions: `default`, `loading`, `disabled`; disabled takes visual precedence. A loading Button blocks presses and replaces its content with a spinner.
- Fields: `default`, `error`, `disabled`, `disabledError`.
- Selection: `unselected`, `selected`, `disabledUnselected`, `disabledSelected`.
- Availability: `default`, `disabled`.

`Pressable` shares the complete `ViewStyleProps` contract with `View`, including direct color, opacity, border, radius, shadow, spacing, dimension, flex, and positioning props. Explicit native `style` objects/callbacks override direct props; `pressedStyle` applies last while pressed. Text and icons own their foreground styling. Pressed behavior belongs to Pressable tokens and the owning interaction component. Do not assume a browser hover/focus-visible system. A theme's focus color alone does not prove every field has a focused visual state.

Design representative default, selected, pressed, disabled, loading, invalid, empty, and error states where they apply. Include long labels, wrapped content, missing imagery, and keyboard-visible forms. State support differs by component; exact maps are in the token reference and owning API.

## 8. Composition and styling in application code

Library code uses React Native styles and theme hooks. Application screens can compose the same primitives and use the same token system. Tailwind/CSS classes used by the marketing site are not the native component styling API.

`View` and other supported primitives expose style-system props for spacing, dimensions, flex, colors, borders, typography, and shadows. These are actual style values: read values from the theme rather than assuming strings such as `padding="sm"` resolve automatically.

```tsx
import { Button, Typography, useTheme, View } from "@impulse-ui-native/toolkit";

export function WelcomeSection() {
  const theme = useTheme();

  return (
    <View
      padding={theme.space.sm}
      gap={theme.space.xs}
      backgroundColor={theme.colors.surface.canvas.value}
    >
      <Typography.Title2>Welcome</Typography.Title2>
      <Typography.Body>Choose your next step.</Typography.Body>
      <Button onPress={() => {}}>Continue</Button>
    </View>
  );
}
```

Useful hooks: `useTheme`, `useColors`, `useSpace`, `useBorder`, `useRadii`, `useComponentsTokens`, and `useThemedStyles`. `useThemedStyles` receives the resolved AppTheme and optionally props/dependencies, allowing memoized native style factories.

Compound components let screens rearrange parts while retaining shared styling and behavior. Child-only parts render supplied children; the convenience component assembles its default content. For example, use Card/List parts for custom media/actions rather than reproducing their chrome from scratch. Labels, navigation actions, and business behavior remain the app's responsibility where the API asks for them.

Use controlled props when application state must persist across screen/overlay lifecycles. Some controls also support default values; names differ (`value`/`onChange`, `checked`/`onCheckedChange`, etc.), so use the actual prop contracts rather than one assumed convention.

## 9. Customizing the design system

Deep partial primitive overrides can customize both schemes. Component overrides may be an object or a callback receiving the already customized primitive theme:

```tsx
<ThemeProvider
  scheme="light"
  theme={{
    light: {
      colors: { primary: { value: "#5b4bff", contrast: "#ffffff" } },
    },
    dark: {
      colors: { primary: { value: "#b0a5ff", contrast: "#16191d" } },
    },
  }}
  components={(theme) => ({
    button: { borderRadius: theme.radii.lg },
    card: { content: { padding: theme.space.msm } },
    modal: { enterDuration: 220, exitDuration: 180 },
  })}
>
  {/* application */}
</ThemeProvider>
```

This is an illustrative customization, not a selected brand for the new application. Primitive changes regenerate component defaults before component overrides are merged. In an app, keep reusable overrides stable and name screen-level decisions clearly.

Categorical axes show every unique valid category in data order by default: this applies to `BarChart` and `MultiBarChart` (including horizontal and stacked bars), and to `LineChart` and `MultiLineChart` with a point X scale. Set `xAxis.tickCount` to explicitly thin these labels, or `0` to hide ticks. Continuous numeric/date line axes and numeric value axes retain a default target of five ticks. Pie charts have no axes.

The brand palette includes `colors.primary`, `colors.accent`, `colors.secondary`, and `colors.subtle`, each with `value` and `contrast`. Use `subtle` for the faintest branded fill: near-white pink in light mode and a faint dark pink tint in dark mode, with `subtle.contrast` as its foreground. This brand tint is separate from the neutral `colors.surface.subtle`. ColorPicker includes a Subtle preset.

Charts have their own palette and geometry under `components.charts`; customize those rather than assuming the brand palette supplies every series. Their explicit component/series props can supersede token defaults. Multi-series line/bar default colors are selected by a hash of the series ID, not simply its display index. The deep merge utility merges arrays by index, so a shorter palette override retains trailing default entries. Review the resolved palette when customizing it. The complete reference includes chart insets, axis/grid/line widths, labels, legends, selection markers, and tooltip presentation.

Motion is component-specific and implemented with Reanimated. Example defaults: Modal enter/exit **180 / 150 ms** with closed scale **0.96**; Flyout enter spring **damping 50, stiffness 300, mass 1**, exit **150 ms**, maximum height ratio **0.7**. The complete table includes Toast, Skeleton, Switch, Slider, and other motion tokens. A global duration token is not present.

## 10. Application setup

Install `@impulse-ui-native/toolkit`, or individual packages for a narrower dependency surface. Install the separate icon package when using named icons. The toolkit's current manifest declares these peers:

| Peer                           | Declared range |
| ------------------------------ | -------------- |
| react                          | >=18           |
| react-native                   | >=0.73         |
| @shopify/react-native-skia     | >=2            |
| react-native-gesture-handler   | >=2.0.0        |
| react-native-reanimated        | >=4            |
| react-native-safe-area-context | >=5.0.0        |
| react-native-svg               | >=13.9.0       |
| react-native-worklets          | >=0.5          |

These are declared package ranges, not a tested compatibility matrix or a promise that every combination works together. For Expo, resolve native packages against the chosen SDK. Endpoint has additional Axios/TanStack Query peers; per-package requirements are preserved in `package-manifest.json`.

The local development catalog currently records React **19.3.0**, React Native **0.88.0**, Expo **58**, Reanimated **4.7.1**, and TypeScript **6.0.3**. These are the repository's development versions, not requirements for the future application's SDK choice.

The full application's provider/host hierarchy is:

```text
GestureHandlerRootView (flex: 1)
  SafeAreaProvider
    ThemeProvider
      OverlayProvider (stable OverlayStore)
        PortalProvider (stable PortalStore)
          navigator or app content
          OverlayHost
          PortalsHost
```

Create stores outside render and mount the matching providers and global hosts once at the root. Selects/date pickers use the portal infrastructure. Gesture, font, and native peer setup remain application work. Use the full setup example in `api/toolkit.md` during implementation.

## 11. Current limits that affect designs

Separate exported capability from unfinished behavior:

- **Tabs:** only the active panel is mounted. Switching unmounts local panel state; there is no keep-mounted, panel caching, prerendering, or lazy-loading mode. Place state above the panel if it must survive switching.
- **StepperTabsNavigation:** currently renders equal-width placeholder bars. Labels, active-step styling, press navigation, and its advertised ref behavior are unfinished. Do not base a finished step-navigation design on those being built in.
- **Select/MultiSelect:** search, richer grouped/custom option presentation, async option states, and selection limits are roadmap extensions rather than established built-in features.
- **Date/time pickers:** constraint, locale, first-day-of-week, timezone/DST, and range-validation contracts need extension or clarification. Do not infer these from a picker name.
- **Flyout:** snap points and stronger scroll/gesture coordination remain follow-up work.
- **Carousel:** autoplay is deferred. Native snapping, resizing, preview and controlled-alignment behavior still need device validation.
- **Charts:** exported families are line, bar, pie, and their multi-series variants. Area, scatter, and sparkline families are candidates. Exact selection, legend, orientation, and tooltip features vary by family.
- **DataView:** successful-state children stay mounted and visually hidden under the loader during loading; plan loaded content height to avoid surrounding layout shifts.
- **Platform scope:** web parity, built-in accessibility semantics, reduced motion, broad automated behavioral coverage, and visual regression automation are deferred project areas. This snapshot is not evidence of those guarantees. Application requirements in those areas need explicit implementation planning.

The status reference also records font scaling, overlay/back-stack policy, form integration, performance, and native validation work. There is no single documented tested iOS/Android/Expo compatibility matrix yet. Use actual device checks when implementing the application.

## 12. Design-first workflow for the new project

1. Define product purpose, target users, primary tasks, data entities, and required screens.
2. Choose default scheme and whether to retain or customize the brand, type, density, and corners.
3. Map each screen to existing components and list capabilities that require custom code.
4. Design navigation, screen hierarchy, and representative screens in both schemes where applicable.
5. Annotate token paths and component size/variant/state choices. Specify app-owned layouts explicitly.
6. Include loading/empty/error, disabled/invalid, long-content, safe-area, and keyboard-visible cases.
7. Review the design against the exact package APIs before implementing.

Suggested prompt to paste with this bundle:

> We are designing a native iOS/Android application using ImpulseUI Native. Read design-context.md first, then use the package and token references when needed. Begin by defining the product's main journeys and screen map, then propose a cohesive design using existing components and semantic tokens. Distinguish current library capabilities from application-specific work. Annotate the design with component names, token paths, sizes, variants, and states. Use the current source contracts; do not invent props or assume web parity. Keep implementation for after we agree on the design. Product brief: [describe the application, users, and main tasks].

### Selection and display tones

Checkbox, Radio, Switch, SegmentedControl, Slider, RangeSlider, and Avatar accept
`tone="neutral" | "primary" | "secondary"` independently of filled, outlined, and
soft variants. All default to `primary` and preserve previous primary appearances.
Selection controls use neutral disabled appearances regardless of tone. Set tone on
SegmentedControl.Root; its items inherit it, while nested roots keep their own palette. Selected segments use the shared palette: outlined is transparent and neutral soft uses surface.subtle against the root surface.default.
Slider and RangeSlider share tone across the active track, thumbs, marks, labels,
and value bubbles. Avatar tone styles fallback content and borders, not images or
presence status. Token maps are explicitly authored as `colors[tone][variant]`
(replacing `variants[variant]`) and retain their existing state structure.

Tag's semantic prop is now `tone`, replacing `color`; `TagTone` replaces `TagColor`.
It supports neutral, primary, secondary, error, warning, success, and info, with
primary as the default. Feedback tones retain their previous appearance.

Select and MultiSelect use a trailing CaretDown while closed and CaretUp while open. Override it through `SuffixIcon` or `Suffix`; loading takes precedence. The default icon inherits the field appearance through `Control.Icon`, following the date-picker addon composition model.

### Shared variant/tone palette

Use the same enabled palette across Button, IconButton, Badge, IconView, Tag,
Avatar, and selection controls. For neutral soft use `surface.subtle.value` /
`text.primary`; for primary soft use `secondary.value` / `secondary.contrast`;
for secondary soft use `subtle.value` / `secondary.contrast`. Field addon icons
use the corresponding foreground, including primary and neutral soft fields.
IconView inherits the Badge palette. Selected segments, slider thumbs and bubbles, and field borders use the same palette as buttons. For disabled selected surfaces, filled uses surface.subtle / border.default, outlined uses transparent / border.default, and soft uses surface.subtle / border.subtle, with text.disabled foreground. Keep entered field text, placeholders, validation, unselected control structure, and presence colors in their distinct semantic roles.

### Repository-wide tone policy

`ComponentTone` is neutral, primary, or secondary; `FeedbackTone` is error, warning,
success, or info. Use tone for palette identity, variant for meaningful appearance,
and dedicated shape props/variants for geometry. Spinner and Progress use stroke
accents: neutral=text.secondary, primary=primary.value, secondary=secondary.contrast;
Progress tracks use surface.subtle, secondary.value, and subtle.value respectively.
Inverse remains available for loading indicators on inverse surfaces.

Tabs, Stepper, and Carousel indicators share stroke accents. Pagination's current
page uses the filled palette. Select options and selected tags inherit their field
tone, including across portals. Date/time fields explicitly propagate tone through
calendar ranges/selections, month/year selects, quick-date tags, nested time fields,
selected time rows, Clear, Cancel, and Apply. DataView propagates tone to its icons,
default actions, and optional custom-loader props. ColorPicker passes tone to its
input/action controls and selected swatch rings, while preserving selected color
values and spectrum/checkerboard data. Toast actions follow the feedback tone of
the icon. Divider supports brand accents and keeps its intensity aliases.

Keep neutral layout surfaces (Card/List/Accordion and overlay shells), typography
roles, presence/validation/feedback semantics, chart-series palettes, skeletons,
and caller-provided data colors distinct from brand-tone selection. App/Storybook
examples may deliberately select a primary or soft-primary palette, but must use
semantic tokens rather than an independent color vocabulary. Site preview controls
mirror the same brand palettes, borders, radii, and unavailable states.

Tone-aware token maps replace scalar/state-only color paths for tabs, pagination,
carousel indicators, stepper navigation, select options, picker days/time rows,
ColorPicker swatch rings, and DataState detail icons. See the generated API references
for exact paths. Consumer-provided text/icon content still owns its foreground.

### Shared component defaults

Defaults follow component roles. Rectangular fields (Input, Textarea, Select/MultiSelect, and date/time pickers) default to `size="medium"`, `variant="outlined"`, and `tone="neutral"`. Their standalone parts use neutral fallbacks and nested parts inherit the root tone. Buttons and accent controls default to `size="medium"`, `variant="filled"`, and `tone="primary"`. Divider defaults to `tone="default"` (the standard border color). Explicit appearance props override defaults; equal variant/tone combinations share the same palette across roles. Internal secondary actions may explicitly use outlined styling.

Shape and semantic variants retain their own defaults: Progress uses linear, icon glyphs use regular, and Toast uses success from its feedback-only tones. These are distinct contracts rather than shared appearance axes.

MultiSelect preserves the field tone for selected tags, using soft tags on filled fields and filled tags on outlined/soft fields. Disabled tags are outlined and non-removable. Nested tags deliberately use a complementary variant so their boundary remains visible.

Date/time picker `variant` and `tone` propagate through portals into month/year Select fields, nested TimePickers, quick-date tags, and both Cancel/Apply buttons. Calendar day/range and time-wheel selection states remain distinct from field variants.
