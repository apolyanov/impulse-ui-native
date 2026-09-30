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

`overflow="scroll"` is the default and preserves readable item widths in narrow
containers. Use `overflow="clip"` only when the layout guarantees enough room.
