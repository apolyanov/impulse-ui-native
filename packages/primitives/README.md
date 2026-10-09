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
- `Typography` exposes named text presets such as `DisplayLarge`, `Title1`, `Body`, `Caption`, and `Code`.
- `Button`, `IconButton`, and `Pressable` provide themed interaction primitives.
- `Tag` labels categories, filters, and metadata, with optional press and close behavior.
- `Badge` provides compact semantic labels with visual variants and Input-style prefix and suffix addons.
- `Spinner` provides token-aware sizes and semantic colors for indeterminate loading states.
- `Divider` separates content horizontally or vertically with logical insets and semantic colors.
- `Avatar` represents identity with shared visual variants, images, initials, custom fallbacks, and semantic presence status.
- `Control` is a compound control system with `Provider`, `Root`, `Label`, `Container`, `Addon`, `Input`, `Placeholder`, `Value`, `Loader`, and `Error` parts.
- `createPreset` creates reusable themed typography presets.
- Public prop types describe every primitive and control part.

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
      <Tag label="Active" color="success" />
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

`Divider` defaults to a subtle horizontal separator. Use logical start/end insets to preserve RTL alignment, switch to vertical orientation inside a container with a defined height, and use `color` only when the semantic tones do not fit the surrounding surface.

`Avatar` supports `filled`, `outlined`, and `soft` display variants. It renders fallback content below its image so initials or a custom fallback remain visible while the image loads or when it fails. Avatar grouping and overflow counts are intentionally handled separately.

Use `Badge` for compact states and metadata. It supports `filled`, `outlined`, and `soft` display variants and semantic tones. Its addons follow Input: use `PrefixIcon` or `Prefix`, `SuffixIcon` or `Suffix`, and optionally `onPressPrefix` or `onPressSuffix`. A custom component takes precedence over its corresponding icon. Use `Tag` when the whole label needs built-in press or close behavior.

## Dedicated component packages

Card, List, Progress, and their prop types are exported from `@impulse-ui-native/card`, `@impulse-ui-native/list`, and `@impulse-ui-native/progress`, respectively. They remain available through `@impulse-ui-native/toolkit`. Migrate direct primitives imports to their owning packages.
