# @impulse-ui-native/icon-view

A non-pressable icon surface built on primitives' `View` and the shared `Icon`.

## Installation

```sh
pnpm add @impulse-ui-native/icon-view @impulse-ui-native/icon react-native-svg react-native-safe-area-context
```

React and React Native are host peers. Render inside the library's `ThemeProvider`.

## Usage

```tsx
import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";

<IconView
  icon={CheckIcon}
  size="large"
  variant="soft"
  tone="success"
  alignSelf="center"
  margin="xs"
/>;
```

`IconView` and `IconViewProps` are exported from this package and toolkit.
Named icons remain available through the icon package's per-icon entrypoints.

- Sizes: `small`, `medium`, `large`, matching IconButton's 32/40/48 square
  containers and themed icon sizes. Default: `medium`.
- Variants: `filled`, `outlined`, `soft`, matching Badge. Default: `filled`.
- Tones: `primary`, `secondary`, `neutral`, `error`, `warning`, `success`, `info`.
  Default: `primary`.
- `icon`: an icon component, matching IconButton's API.
- `iconProps`: SVG options, including the icon weight through `variant`.
- `color` and `backgroundColor`: foreground and background overrides.

All primitives `View` props except `children` are supported, including direct
layout, spacing, border, and shadow props. Native `style` overrides direct style
props, which override the component's default container styles. Parent alignment
applies normally. Styling comes from `theme.components.iconView`.

Use IconButton when the icon is an action; IconView has no built-in press behavior.
