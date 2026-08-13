# @impulse-ui-native/icon

A React Native SVG icon library with a common renderer and six visual weights.

## Installation

```sh
pnpm add @impulse-ui-native/icon react-native-svg
```

## Main exports

- `Icon` normalizes icon size, color, and rendering.
- Named wrapper icons such as `HeartIcon` select a visual weight through the `variant` prop.
- Every icon is also exported as a weight-specific component, for example `HeartBoldIcon` and `HeartThinIcon`.
- Available weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`.
- `IconProps`, `IconWrapperProps`, `IconVariant`, and `IconStyle` support typed composition.

## Usage

```tsx
import { HeartIcon, Icon } from "@impulse-ui-native/icon";

<Icon icon={HeartIcon} variant="duotone" size="large" color="#6d5dfc" />;
```

You can also render a named wrapper directly when you want to control the SVG dimensions yourself.

```tsx
<HeartIcon variant="regular" width={24} height={24} fill="#111827" />
```

All icons are available from the package root. Wrapper names use the `{Name}Icon` form; fixed-weight names use `{Name}{Weight}Icon`.
