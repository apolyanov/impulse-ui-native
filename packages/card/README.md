# @impulse-ui-native/card

Themed cards with a ready-made component and child-only composable parts.

## Installation

`pnpm add @impulse-ui-native/card`

Install the React and React Native peers and render inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Ready-made Card

```tsx
import { Card } from "@impulse-ui-native/card";
import { Typography } from "@impulse-ui-native/primitives";

<Card header={<Typography.Title4>Account</Typography.Title4>}>
  <Typography.Body>Three updates are available.</Typography.Body>
</Card>;
```

Card assembles `Card.Root`, optional `Card.Media`, `Card.Header`, and `Card.Footer`, and places children inside `Card.Content`. Pass React nodes through `media`, `header`, and `footer`. It applies the existing `theme.components.card` tokens; it adds no icons or text of its own.

## Custom composition

```tsx
<Card.Root>
  <Card.Header>
    <Typography.Title4>Account</Typography.Title4>
  </Card.Header>
  <Card.Content>
    <Typography.Body>Choose your own layout.</Typography.Body>
  </Card.Content>
</Card.Root>
```

`Card.Root`, `Card.Header`, `Card.Content`, `Card.Footer`, and `Card.Media` render supplied children and accept primitive View props. `Card.Pressable` supplies the card surface with native press and disabled behavior. Use it for one surface-level action; use Root with separate footer actions when the card contains independent buttons. Parts accept style overrides.

Card and its prop types are also exported by `@impulse-ui-native/toolkit`. Migrate imports from primitives to this package or the toolkit. The on-device Card stories exercise static, media, and pressable compositions in light and dark themes.
