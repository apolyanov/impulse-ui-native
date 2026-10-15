# @impulse-ui-native/card

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/card/src/components/index.ts

```tsx
import { CardComponent } from "./card";
import { Card as CardParts } from "./card-parts";

export const Card = Object.assign(CardComponent, CardParts);
```

### packages/card/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/card/src/types/card.types.ts

```tsx
import type { ReactNode } from "react";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type {
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type CardRootProps = ViewProps;

export interface CardProps extends CardRootProps {
  header?: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
}

export interface CardPressableProps
  extends
    Omit<PressableProps, "children">,
    DimensionProps,
    SpacingProps,
    ShadowProps {
  children?: ReactNode;
  pressedStyle?: StyleProp<ViewStyle>;
}

export type CardHeaderProps = ViewProps;

export type CardContentProps = ViewProps;

export type CardFooterProps = ViewProps;

export type CardMediaProps = ViewProps;
```

### packages/card/src/types/index.ts

```tsx
export * from "./card.types";
```
