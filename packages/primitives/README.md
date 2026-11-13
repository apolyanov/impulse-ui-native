# @impulse-ui-native/primitives

Token-aware React Native building blocks used directly by applications and by the higher-level Impulse UI Native packages.

## Installation

```sh
pnpm add @impulse-ui-native/primitives
```

Render primitives inside `ThemeProvider` from `@impulse-ui-native/theme`.

`SafeAreaView` additionally requires `react-native-safe-area-context` and a `SafeAreaProvider` near the application root. Icon-based primitives require `react-native-svg`:

```sh
pnpm add react-native-safe-area-context react-native-svg
```

## Main exports

- `View` adds theme spacing, dimensions, flex, borders, colors, and shadow props to React Native's view.
- `SafeAreaView` maps safe-area edges to the theme spacing scale.
- `Typography` exposes named text presets such as `DisplayLarge`, `Title1`, `Body`, `Caption`, and `Code`. All presets accept the same direct margin and padding props as `View`, including side, horizontal, and vertical props. Explicit `style` values take precedence.
- `Button`, `IconButton`, and `Pressable` provide themed interaction primitives.
- `Tag` labels categories, filters, and metadata, with optional press and close behavior.
- `Badge` provides compact semantic labels with visual variants and Input-style prefix and suffix addons.
- `Spinner` provides token-aware sizes and semantic colors for indeterminate loading states.
- `Divider` separates content horizontally or vertically with logical insets and semantic colors.
- `Avatar` represents identity with shared visual variants, images, initials, custom fallbacks, and semantic presence status.
- `Control` is a compound control system with `Provider`, `Root`, `Label`, `Container`, `Addon`, `Input`, `Placeholder`, `Value`, `Loader`, and `Error` parts.
- `createPreset` creates reusable themed typography presets.
- Public prop types describe every primitive and control part.

All Typography presets support direct spacing props:

```tsx
<Typography.Body marginBottom={8} paddingHorizontal={16}>
  Spaced text
</Typography.Body>
```

Typography presets update their colors with the active theme:

- `Subtitle1`, `Subtitle2`, `BodySmall`, `Caption`, `Helper`, `Overline`, and
  `Eyebrow` use `theme.colors.text.secondary` for supporting text.
- The other presets use `theme.colors.text.primary` for headings and main content.

`createPreset` accepts a theme-based `color` in its configuration and falls back
to `text.primary` when omitted. Explicit `color` props override the preset color;
`style.color` takes precedence over both. Use tertiary, disabled, inverse, and
feedback colors explicitly when the surrounding component or state requires them.
Preset and explicit `fontFamily` and `fontVariant` values are honored, including
monospace Code. `numeric` selects tabular numbers; style overrides apply last.

## Example

```tsx
import { Card } from "@impulse-ui-native/card";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Spinner,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
import { Progress } from "@impulse-ui-native/progress";
import { useSpace } from "@impulse-ui-native/theme";

export function ProfileSummary() {
  const space = useSpace();

  return (
    <View gap={space.md} padding={space.lg}>
      <Typography.Title3>Profile</Typography.Title3>
      <Avatar initials="AK" status="online" variant="soft" />
      <Tag label="Active" tone="success" />
      <Badge tone="success" variant="soft">
        Active
      </Badge>
      <Spinner size="small" tone="secondary" />
      <Progress value={65} />
      <Card.Root>
        <Card.Header>
          <Typography.Title4>Account activity</Typography.Title4>
        </Card.Header>
        <Card.Content>
          <Typography.Body>Three new updates are available.</Typography.Body>
        </Card.Content>
      </Card.Root>
      <Divider inset="both" />
      <Button variant="filled" onPress={() => {}}>
        Continue
      </Button>
    </View>
  );
}
```

Use the compound `Control` when building a custom field that should share the same label, addon, error, size, and variant behavior as `Input` and `Select`.

`Control.Input` forwards its ref to the native React Native `TextInput`. Pass an
object or callback ref to access native methods such as `focus()`, `blur()`, and
`clear()`, or connect a form library's field ref.

`Control.Trigger` combines the field container's themed geometry with a
Pressable. It respects group and local disabling and accepts supplied children,
style props, and function-valued pressable styles. `Control.Icon` renders a
caller-selected icon with the current field's addon color.

`Control.Field` assembles a label, trigger, optional prefix/suffix slots, and an
error label for a read-only selection field. The caller supplies the value,
placeholder, icons, and behavior; this convenience component does not choose
default icons or manage selection state.

```tsx
<Control.Field
  label="Destination"
  onPress={openDestinationPicker}
  prefix={<Control.Icon icon={LocationIcon} />}
>
  <Control.Value>{destination}</Control.Value>
</Control.Field>
```

`Control.Addon` and `Control.Error` render supplied children. Addons own spacing
and optional press behavior, including group/local disabling; the parent chooses
and renders icons or custom content. Error owns error-label styling; the parent
chooses the text and whether to render the slot. `Input`, `Select`, date/time
pickers, `Textarea`, and `FormField` assemble these children explicitly.

For direct composition, migrate `icon` and `Content` props to addon children and
supply error text instead of relying on `Control.Provider.error` to render it:

```tsx
<>
  <Control.Addon onPress={onPressPrefix}>
    <Icon icon={PrefixIcon} color={addonColor} />
  </Control.Addon>
  {error ? <Control.Error>{error}</Control.Error> : null}
</>
```

Resolve `addonColor` from
`getFieldStateTokens(theme.components.controlAddon.variants[variant], { disabled, error: Boolean(error) }).iconColor`
using the current theme. The provider's error value continues to drive field
appearance, but does not inject label content.

`Button` and `IconButton` replace their content with a loading indicator when `loading` is true. Loading controls block interaction until loading ends.

`Spinner` defaults to the primary theme tone and medium size. Use `tone="inverse"` on inverse surfaces, or provide `color` when the indicator must match contextual content.

`Divider` defaults to a horizontal separator using `tone="default"`. Use start/end insets to align it with surrounding content, switch to vertical orientation inside a container with a defined height, and use `color` only when the semantic tones do not fit the surrounding surface.

`Avatar` supports `filled`, `outlined`, and `soft` display variants. It renders fallback content below its image so initials or a custom fallback remain visible while the image loads or when it fails. Avatar grouping and overflow counts are intentionally handled separately.

Use `Badge` for compact states and metadata. It supports `filled`, `outlined`, and `soft` display variants and semantic tones. Its addons follow Input: use `PrefixIcon` or `Prefix`, `SuffixIcon` or `Suffix`, and optionally `onPressPrefix` or `onPressSuffix`. A custom component takes precedence over its corresponding icon. Use `Tag` when the whole label needs built-in press or close behavior.

Badge text and Tag labels stay on one line and truncate with a trailing ellipsis when constrained by available width. Their containers shrink within rows while icons and close actions retain their space. Use `style.width` or `style.maxWidth` for a specific limit; custom Badge children own their text overflow behavior.

Badges follow their parent's `alignItems` for cross-axis alignment. For example,
use `alignItems="center"` on a column to center badges horizontally. Use
`alignSelf` on a badge when it needs a different alignment from its siblings.

## Dedicated component packages

Card, List, Progress, and their prop types are exported from `@impulse-ui-native/card`, `@impulse-ui-native/list`, and `@impulse-ui-native/progress`, respectively. They remain available through `@impulse-ui-native/toolkit`. Migrate direct primitives imports to their owning packages.

## Shared shadow and code-font defaults

`View` and `Pressable` resolve semantic shadow levels from the active
`theme.shadows` scale, including Android elevation. Explicit shadow style props
and style overrides still take precedence. Configure `theme.codeFontFamily`
to change `Typography.Code` globally; its default remains `monospace`.

## Field layout

`Control.Root` uses normal parent stretching rather than a forced width.
`Control.Field` accepts flex, dimension, and spacing props on its outer root.
In a column, fields stretch horizontally by default without growing vertically.
In a row, set `flex={1}` on each field to share the available width. If the
parent centers its children, use `alignSelf="stretch"` or an explicit `width`.

## Pressable styling

`Pressable` accepts the same direct styling props as `View`: spacing, colors,
opacity, shadows, borders, radii, flex layout, positioning, and dimensions. Both
share the exported `ViewStyleProps` contract. Native `style` objects or callbacks override
direct style props; `pressedStyle` applies last while pressed.

```tsx
<Pressable
  flex={1}
  flexDirection="row"
  alignItems="center"
  gap={8}
  padding={16}
  backgroundColor={colors.surface.subtle.value}
  borderColor={colors.border.default.value}
  borderWidth={1}
  borderRadius={radii.md}
>
  <Typography.Master>Continue</Typography.Master>
</Pressable>
```

Text and icons keep their own foreground styling, as with `View`.

## Field appearance

Rectangular fields support `variant="outlined" | "soft" | "filled"` and
`tone="neutral" | "primary" | "secondary"`. The default is `outlined` / `neutral`.
Outlined uses a transparent surface with a tone border; soft uses a subtle tone
surface; filled uses the tone fill with its paired foreground. Colors come from
the active theme in both schemes. Error styling overrides the selected tone;
disabled fields use neutral styling and block interaction.

Customize `components.controlContainer.colors[tone][variant][state]`,
`controlInput.colors[tone][variant][state]`, and
`controlAddon.colors[tone][variant][state]` together. These tone-aware maps replace
the previous `variants[variant][state]` maps.

## Button tones

`Button` and `IconButton` accept `tone="neutral" | "primary" | "secondary"`
independently of `variant="filled" | "outlined" | "soft" | "ghost"`.
The default tone is `primary`, preserving the existing default appearances.
Neutral uses the neutral palette; secondary uses the secondary brand palette.
Filled uses the tone fill and paired foreground, outlined uses a tone border,
soft uses a subtle tone surface, and ghost uses tone content on a transparent surface.
Loading indicators inherit the resolved foreground. Disabled appearances remain
neutral and both disabled and loading states prevent interaction.

```tsx
<Button variant="soft" tone="neutral">Cancel</Button>
<Button variant="filled" tone="primary">Save</Button>
<IconButton icon={SparkleIcon} variant="outlined" tone="secondary" />
```

Custom action tokens move from `variants[variant][state]` to
`components.button.colors[tone][variant][state]` and
`components.iconButton.colors[tone][variant][state]`. Each map is authored
explicitly for direct lookup. For custom Button children, style their foreground
using the matching resolved action tokens; string children are styled automatically.

## Tag and Avatar tones

`Tag` now uses `tone` instead of `color`, with the exported `TagTone` type replacing
`TagColor`. It supports `neutral`, `primary`, `secondary`, `error`, `warning`,
`success`, and `info`; existing feedback palettes remain available. The default is
`primary`. Use `<Tag label="Active" tone="success" />`.

`Avatar` accepts `tone="neutral" | "primary" | "secondary"`, defaulting to
`primary`, across filled, outlined, and soft variants. Tone affects the fallback
surface, initials, and border; images and presence/status colors retain their own
meaning. Avatar appearance tokens move to `components.avatar.colors[tone][variant]`.

Badge, Tag, IconView, and field addon icons share the enabled variant/tone palette with Button and IconButton: primary soft uses secondary fill/contrast, secondary soft uses subtle fill with secondary contrast, and neutral soft uses subtle neutral fill with primary text.

Selected control surfaces and disabled selected surfaces share the Button palette, including field borders, Tag borders, slider thumbs/bubbles, and segmented items. Entered text and validation retain their own semantic roles.

## Repository palette consistency

Spinner uses the shared primary/secondary/neutral stroke accents, plus inverse.
Divider adds neutral and secondary tones alongside primary/inverse and the existing
subtle/default/strong border-intensity aliases. Its default is `tone="default"`.
Feedback tone names are shared through FeedbackTone; generic brand tones through
ComponentTone. Typography foregrounds and raw Icon color/fill remain explicit
semantic or caller-selected colors, rather than a second tone API.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/primitives.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
