# @impulse-ui-native/progress

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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

Indeterminate linear motion travels from left to right. Reanimated loops cancel on unmount and restart when duration changes. Native View props, styles, and linear `onLayout` callbacks are preserved.

`Progress` and `ProgressProps` are also exported by `@impulse-ui-native/toolkit`. Migrate imports from primitives to this package or the toolkit. Use the native Progress stories to inspect both variants, ranges, sizes, tones, and indeterminate states.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/progress/src/components/index.ts

```tsx
export { Progress } from "./progress";
```

### packages/progress/src/components/progress.tsx

```tsx
import { memo, useMemo } from "react";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ProgressProps } from "../types";
import { normalizeProgressValue } from "../utils/progress.utils";
import { CircularProgress } from "./circular-progress";
import { LinearProgress } from "./linear-progress";

export const Progress = memo(function Progress({
  color,
  max = 100,
  min = 0,
  size = "medium",
  tone = "primary",
  trackColor,
  value,
  variant = "linear",
  ...props
}: ProgressProps) {
  const tokens = useComponentsTokens().progress;
  const sizeTokens = tokens.sizes[size];
  const colorTokens = tokens.colors[tone];

  const normalized = useMemo(
    () => normalizeProgressValue(value, min, max),
    [max, min, value],
  );

  const indeterminate = normalized.value === undefined;

  const commonProps = {
    ...props,
    animationDuration: tokens.animationDuration,
    fraction: normalized.fraction,
    indicatorColor: color ?? colorTokens.indicatorColor,
    indeterminate,
    trackColor: trackColor ?? colorTokens.trackColor,
  };

  return (
    <>
      {variant === "circular" ? (
        <CircularProgress
          {...commonProps}
          strokeWidth={sizeTokens.circularStrokeWidth}
          width={sizeTokens.circularSize}
        />
      ) : null}
      {variant === "linear" ? (
        <LinearProgress
          {...commonProps}
          borderRadius={tokens.borderRadius}
          indeterminateWidth={tokens.indeterminateLinearWidth}
          trackHeight={sizeTokens.linearHeight}
        />
      ) : null}
    </>
  );
});
```

### packages/progress/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/progress/src/types/index.ts

```tsx
export * from "./progress.types";
```

### packages/progress/src/types/progress.types.ts

```tsx
import type { ColorValue, ViewProps } from "react-native";

import type {
  ComponentSize,
  ProgressTone,
  ProgressVariant,
} from "@impulse-ui-native/theme";

export interface ProgressProps extends Omit<ViewProps, "children"> {
  color?: ColorValue;
  max?: number;
  min?: number;
  size?: ComponentSize;
  tone?: ProgressTone;
  trackColor?: ColorValue;
  value?: number;
  variant?: ProgressVariant;
}
```
