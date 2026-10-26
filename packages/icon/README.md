# @impulse-ui-native/icon

A React Native SVG icon library with a common renderer and six visual weights.

## Installation

```sh
pnpm add @impulse-ui-native/icon react-native-svg
```

## Main exports

- `Icon` normalizes icon size, color, and rendering. Its default foreground is
  `theme.colors.text.primary`; explicit `color`, then `fill`, override that default.
- Named wrapper icons such as `HeartIcon` select a visual weight through the `variant` prop.
- Available weights are `bold`, `duotone`, `fill`, `light`, `regular`, and `thin`.
- `IconProps`, `IconWrapperProps`, `IconVariant`, and `IconStyle` support typed composition.

## Usage

```tsx
import { Icon } from "@impulse-ui-native/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";

<Icon icon={HeartIcon} variant="duotone" size="large" color="#6d5dfc" />;
```

You can also render a named wrapper directly when you want to control the SVG dimensions yourself. Supply its `color` explicitly; automatic theme defaults come from the shared `Icon` renderer.

```tsx
<HeartIcon variant="regular" width={24} height={24} color="#111827" />
```

Wrapper names use the `{Name}Icon` form. Import wrappers through their per-icon
entrypoints so Metro only includes the icons used by the application:

```tsx
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
```

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/icon.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
