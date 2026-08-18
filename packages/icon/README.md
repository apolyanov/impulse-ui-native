# @impulse-ui-native/icon

A React Native SVG icon library with a common renderer and six visual weights.

## Installation

```sh
pnpm add @impulse-ui-native/icon react-native-svg
```

## Main exports

- `Icon` normalizes icon size, color, and rendering.
- Named wrapper icons such as `HeartIcon` select a visual weight through the `variant` prop.
- Available weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`.
- `IconProps`, `IconWrapperProps`, `IconVariant`, and `IconStyle` support typed composition.

## Usage

```tsx
import { Icon } from "@impulse-ui-native/icon/components/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";

<Icon icon={HeartIcon} variant="duotone" size="large" color="#6d5dfc" />;
```

You can also render a named wrapper directly when you want to control the SVG dimensions yourself.

```tsx
<HeartIcon variant="regular" width={24} height={24} fill="#111827" />
```

Wrapper names use the `{Name}Icon` form. Import wrappers through their per-icon
entrypoints so Metro only includes the icons used by the application:

```tsx
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
```
