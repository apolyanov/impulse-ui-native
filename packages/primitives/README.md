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
- `Button`, `IconButton`, `Pressable`, and `Tag` provide themed interaction primitives.
- `Spinner` provides token-aware sizes and semantic colors for indeterminate loading states.
- `Progress` provides accessible linear and circular determinate or indeterminate progress.
- `Card` provides compound `Root`, `Pressable`, `Header`, `Content`, `Footer`, and `Media` surfaces.
- `Control` is a compound control system with `Provider`, `Root`, `Label`, `Container`, `Addon`, `Input`, `Placeholder`, `Value`, `Loader`, and `Error` parts.
- `createPreset` creates reusable themed typography presets.
- Public prop types describe every primitive and control part.

## Example

```tsx
import {
  Button,
  Card,
  Progress,
  Spinner,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";

export function ProfileSummary() {
  return (
    <View gap="md" padding="lg">
      <Typography.Title3>Profile</Typography.Title3>
      <Tag label="Active" color="success" />
      <Spinner
        size="small"
        tone="secondary"
        accessibilityLabel="Loading profile"
      />
      <Progress value={65} accessibilityLabel="Profile completion" />
      <Card.Root>
        <Card.Header>
          <Typography.Title4>Account activity</Typography.Title4>
        </Card.Header>
        <Card.Content>
          <Typography.Body>Three new updates are available.</Typography.Body>
        </Card.Content>
      </Card.Root>
      <Button variant="filled" onPress={() => {}}>
        Continue
      </Button>
    </View>
  );
}
```

Use the compound `Control` when building a custom field that should share the same label, addon, error, size, and variant behavior as `Input` and `Select`.

`Button` and `IconButton` replace their content with a loading indicator when `loading` is true. Loading controls block interaction and expose their busy state to assistive technologies. Provide an `accessibilityLabel` for every `IconButton` because its icon does not supply an accessible name.

`Spinner` defaults to the primary theme tone and medium size. Use `tone="inverse"` on inverse surfaces, or provide `color` when the indicator must match contextual content. Give standalone spinners an `accessibilityLabel` that describes what is loading.

`Progress` defaults to a medium linear indicator. Provide `value` for determinate progress or omit it for an indeterminate animation. Values are clamped between `min` and `max`, defaulting to `0` and `100`. Indeterminate animation respects the platform reduced-motion preference. Give each progress indicator an `accessibilityLabel` describing the operation.

Use `Card.Root` for a static surface and `Card.Pressable` when the whole card has one action. Pressable cards default to the `button` accessibility role; override it when another role such as `link` is more accurate and provide an accessible label. Avoid placing independently pressable controls inside `Card.Pressable`; use `Card.Root` with actions in `Card.Footer` instead.
