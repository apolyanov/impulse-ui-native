# @impulse-ui-native/segmented-control

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/segmented-control

Token-aware single-selection controls for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/segmented-control
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.
The package expects compatible `react`, `react-native`, and `react-native-svg`
peer dependencies in the host application.

## Main exports

- `SegmentedControl.Root` owns the selected value, shared appearance, disabled
  state, and overflow policy.
- `SegmentedControl.Item` represents one selectable value and supports a label,
  an icon, or both.

## Usage

```tsx
import { CalendarBlankIcon } from "@impulse-ui-native/icon/icons/calendar-blank";
import { SegmentedControl } from "@impulse-ui-native/segmented-control";

export function CalendarRange() {
  return (
    <SegmentedControl.Root defaultValue="week">
      <SegmentedControl.Item Icon={CalendarBlankIcon} value="day">
        Day
      </SegmentedControl.Item>
      <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
      <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
```

Use `value` and `onValueChange` for controlled state, or `defaultValue` for
uncontrolled state. One of `value` or `defaultValue` is required so the group
always starts with one selected item. Item values must be unique within a root.

The root accepts the shared `small`, `medium`, and `large` sizes and the
`filled`, `outlined`, and `soft` selection variants. Set `disabled` on the root
to disable the whole group or on an item to disable only that option.

`overflow="clip"` is the default. Use `overflow="scroll"` for narrow containers.
In scroll mode, `initialScrollToSelected` defaults to `true` and reveals the
initially selected item after native layout. Actual item widths, gaps, padding,
and nested native wrappers are measured. Set it to `false` to keep the starting
position. An explicit native `contentOffset` takes precedence, and native layout,
content-size, and drag callbacks are preserved.

Later selection changes do not scroll again. Remount the root for a fresh initial
position. A user drag cancels pending positioning. Custom zoom, content insets,
and snapping are outside the initial-scroll helper's scope; use
`initialScrollToSelected={false}` when managing those offsets yourself.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/segmented-control/src/components/index.ts

```tsx
export { SegmentedControl } from "./segmented-control";
```

### packages/segmented-control/src/components/segmented-control.ts

```tsx
import { SegmentedControlItem } from "./item";
import { SegmentedControlRoot } from "./root";

export const SegmentedControl = {
  Item: SegmentedControlItem,
  Root: SegmentedControlRoot,
};
```

### packages/segmented-control/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/segmented-control/src/types/index.ts

```tsx
export * from "./segmented-control.types";
```

### packages/segmented-control/src/types/segmented-control.types.ts

```tsx
import type { ReactNode } from "react";
import type { PressableProps, ScrollViewProps } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type {
  ComponentSize,
  SegmentedControlItemLayout,
  SelectionVariant,
} from "@impulse-ui-native/theme";

export type SegmentedControlOverflow = "clip" | "scroll";

interface SegmentedControlRootCommonProps extends Omit<
  ScrollViewProps,
  "children" | "horizontal" | "scrollEnabled"
> {
  children?: ReactNode;
  disabled?: boolean;
  /** Reveal the initially selected item in scroll mode. Defaults to true. */
  initialScrollToSelected?: boolean;
  onValueChange?: (value: string) => void;
  overflow?: SegmentedControlOverflow;
  size?: ComponentSize;
  variant?: SelectionVariant;
}

interface SegmentedControlControlledRootProps extends SegmentedControlRootCommonProps {
  defaultValue?: never;
  value: string;
}

interface SegmentedControlUncontrolledRootProps extends SegmentedControlRootCommonProps {
  defaultValue: string;
  value?: never;
}

export type SegmentedControlRootProps =
  SegmentedControlControlledRootProps | SegmentedControlUncontrolledRootProps;

export interface SegmentedControlItemProps extends Omit<
  PressableProps,
  "children"
> {
  children?: ReactNode;
  Icon?: IconProps["icon"];
  value: string;
}

export interface SegmentedControlRootThemeProps {
  size: ComponentSize;
}

export interface SegmentedControlItemThemeProps {
  disabled: boolean;
  layout: SegmentedControlItemLayout;
  selected: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
}
```
