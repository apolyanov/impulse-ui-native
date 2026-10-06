# @impulse-ui-native/progress

Token-aware linear and circular progress with Reanimated indeterminate animations.

## Installation

`pnpm add @impulse-ui-native/progress`

Install React, React Native, `react-native-svg`, `react-native-reanimated` (4 or newer), and compatible `react-native-worklets` peers. Configure Reanimated and Worklets in the native host, and render inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Usage

```tsx
import { Progress } from "@impulse-ui-native/progress";

<Progress value={65} />;
<Progress variant="circular" value={35} />;
<Progress />;
```

Progress defaults to a medium linear indicator with the primary tone. Provide `value` for determinate progress or omit it for indeterminate progress. Values are clamped between `min` and `max`, defaulting to 0 and 100. Invalid bounds fall back to a finite range; non-finite values render at the range minimum. Sizes, semantic colors, geometry, and animation duration come from `theme.components.progress`. Override indicator and track colors through `color` and `trackColor`.

Indeterminate linear motion respects RTL. Reanimated loops cancel on unmount and restart when duration changes. Native View props, styles, and linear `onLayout` callbacks are preserved.

`Progress` and `ProgressProps` are also exported by `@impulse-ui-native/toolkit`. Migrate imports from primitives to this package or the toolkit. Use the native Progress stories to inspect both variants, ranges, sizes, tones, and indeterminate states.
