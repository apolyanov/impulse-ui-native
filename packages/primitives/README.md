# @impulse-ui-native/primitives

Token-aware React Native building blocks used directly by applications and by the higher-level Impulse UI Native packages.

## Installation

```sh
pnpm add @impulse-ui-native/primitives
```

Render primitives inside `ThemeProvider` from `@impulse-ui-native/theme`.

`SafeAreaView` additionally requires `react-native-safe-area-context` and a `SafeAreaProvider` near the application root. Circular `Progress` requires `react-native-svg`:

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
- `Progress` provides linear and circular determinate or indeterminate progress.
- `Card` provides compound `Root`, `Pressable`, `Header`, `Content`, `Footer`, and `Media` surfaces.
- `Divider` separates content horizontally or vertically with logical insets and semantic colors.
- `Avatar` represents identity with shared visual variants, images, initials, custom fallbacks, and semantic presence status.
- `Control` is a compound control system with `Provider`, `Root`, `Label`, `Container`, `Addon`, `Input`, `Placeholder`, `Value`, `Loader`, and `Error` parts.
- `createPreset` creates reusable themed typography presets.
- Public prop types describe every primitive and control part.

## Example

```tsx
import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Progress,
  Spinner,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
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

`Button` and `IconButton` replace their content with a loading indicator when `loading` is true. Loading controls block interaction until loading ends.

`Spinner` defaults to the primary theme tone and medium size. Use `tone="inverse"` on inverse surfaces, or provide `color` when the indicator must match contextual content.

`Progress` defaults to a medium linear indicator. Provide `value` for determinate progress or omit it for an indeterminate animation. Values are clamped between `min` and `max`, defaulting to `0` and `100`.

Use `Card.Root` for a static surface and `Card.Pressable` when the whole card has one action. Avoid placing independently pressable controls inside `Card.Pressable`; use `Card.Root` with actions in `Card.Footer` instead.

`Divider` defaults to a subtle horizontal separator. Use logical start/end insets to preserve RTL alignment, switch to vertical orientation inside a container with a defined height, and use `color` only when the semantic tones do not fit the surrounding surface.

`Avatar` supports `filled`, `outlined`, and `soft` display variants. It renders fallback content below its image so initials or a custom fallback remain visible while the image loads or when it fails. Avatar grouping and overflow counts are intentionally handled separately.

Use `Badge` for compact states and metadata. It supports `filled`, `outlined`, and `soft` display variants and semantic tones. Its addons follow Input: use `PrefixIcon` or `Prefix`, `SuffixIcon` or `Suffix`, and optionally `onPressPrefix` or `onPressSuffix`. A custom component takes precedence over its corresponding icon. Use `Tag` when the whole label needs built-in press or close behavior.

## List

List is a presentation-focused compound component, exported through primitives
and the toolkit. It uses the existing theme provider and adds no runtime peers.

```tsx
import { Divider, List, Typography } from "@impulse-ui-native/primitives";

<List.Root>
  <List.Item>
    <List.Leading>{/* Icon, avatar, or custom content */}</List.Leading>
    <List.Content>
      <Typography.Title6>Account</Typography.Title6>
      <Typography.BodySmall>Personal details</Typography.BodySmall>
    </List.Content>
    <List.Trailing>{/* Badge, metadata, or indicator */}</List.Trailing>
  </List.Item>
  <Divider inset="both" />
  <List.Pressable onPress={openPreferences}>
    <List.Content>
      <Typography.Body>Preferences</Typography.Body>
    </List.Content>
  </List.Pressable>
</List.Root>;
```

Root supplies the surface; Item supplies a static row; Pressable supplies the
same row layout with native press and disabled behavior. Leading and Trailing
keep custom content at its natural size while Content fills the remaining width.
All parts accept their underlying primitive props and style overrides. Use
Typography for titles and descriptions and Divider for explicit separators.
Parts may also be composed without Root for standalone rows. Selection and
indicators remain application-owned; no context, selection state, or automatic
separator insertion is included. Theme defaults live in components.list.
