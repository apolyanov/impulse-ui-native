# @impulse-ui-native/select

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/select

Single- and multi-value select controls that present their options in a themed flyout bottom sheet.

## Installation

```sh
pnpm add @impulse-ui-native/select react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-worklets
```

Complete the Gesture Handler, Reanimated, Worklets, and Safe Area Context setup required by your React Native or Expo project. The simplest application setup is to use `ThemeProvider`, wrap the app with `GestureHandlerRootView` and `SafeAreaProvider`, and mount one `PortalsHost` inside a `PortalProvider` at the application root.

## Main exports

- `Select` chooses one primitive value.
- `MultiSelect` chooses an array of primitive values.
- `SelectOption` describes `{ label, value, disabled? }` entries.
- `SelectProps`, `MultiSelectProps`, and the supporting control/flyout types are exported for composition.

## Usage

```tsx
import {
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";
import { Select } from "@impulse-ui-native/select";

const portalStore = new PortalStore();

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations", disabled: true },
];

export function DepartmentField() {
  const [value, setValue] = useState<string>();

  return (
    <PortalProvider store={portalStore}>
      <Select
        label="Department"
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose a department"
      />
      <PortalsHost />
    </PortalProvider>
  );
}
```

Both controls support controlled `value` and uncontrolled `defaultValue` usage. Values are limited to strings, numbers, `null`, and `undefined`; multi-select stores an array of those values.

On each opening, Select reveals its selected option. MultiSelect reveals the first selected option in list order. Lists that fit within the flyout stay at the top so all rows remain visible. Longer lists use native initial scrolling to reveal the opening selection. Options are single-line rows with a fixed `theme.components.select.option.height` (56 by default), also supplied to native `getItemLayout`. Long labels truncate at the end. Selection changes while open do not change the opening target. Set `initialScrollToSelected={false}` to retain the normal starting position.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/select/src/components/index.ts

```tsx
export { Select } from "./select";
export { MultiSelect } from "./multi-select";
```

### packages/select/src/components/multi-select.tsx

```tsx
import { memo, ReactElement, useId } from "react";

import { useEventCallback, useIsOpen } from "@impulse-ui-native/core";
import { Control, Tag, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { useMultiSelect } from "../hooks/use-multi-select.hook";
import { MultiSelectProps, PrimitiveValue } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";

interface SelectedTagProps<Value extends PrimitiveValue> {
  value: Value;
  label: string;
  size: MultiSelectProps<Value>["size"];
  onSelect: (value: Value) => void;
}

function SelectedTagComponent<Value extends PrimitiveValue>(
  props: SelectedTagProps<Value>,
) {
  const handleClose = useEventCallback(() => props.onSelect(props.value));

  return (
    <Tag
      variant="filled"
      size={props.size}
      closable
      onClose={handleClose}
      label={props.label}
    />
  );
}

const SelectedTag = memo(SelectedTagComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectedTagProps<Value>,
) => ReactElement | null;

function MultiSelectComponent<Value extends PrimitiveValue>(
  props: MultiSelectProps<Value>,
) {
  const {
    options,
    value,
    defaultValue,
    onChange,
    placeholder,
    initialScrollToSelected,
    ...rest
  } = props;

  const tokens = useComponentsTokens();

  const selectTokens = tokens.select;

  const id = useId();

  const { isOpen, open, close } = useIsOpen();

  const { selected, hasSelected, select, isSelected, getLabel } =
    useMultiSelect({
      options,
      value,
      defaultValue,
      onChange,
    });

  return (
    <SelectControl {...rest} onPress={open}>
      {!hasSelected ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {hasSelected ? (
        <View
          flex={1}
          flexDirection="row"
          gap={selectTokens.multiValueGap}
          marginHorizontal={selectTokens.multiValueMarginHorizontal}
          overflow="hidden"
        >
          {selected
            ? selected.map((value) => (
                <SelectedTag
                  size={props.size}
                  key={value}
                  label={String(getLabel(value))}
                  value={value}
                  onSelect={select}
                />
              ))
            : null}
        </View>
      ) : null}
      <SelectFlyout
        id={id}
        title="Options"
        open={isOpen}
        options={options}
        initialScrollToSelected={initialScrollToSelected}
        isSelected={isSelected}
        onCloseFinished={close}
        onSelect={select}
      />
    </SelectControl>
  );
}

export const MultiSelect = memo(MultiSelectComponent) as <
  Value extends PrimitiveValue,
>(
  props: MultiSelectProps<Value>,
) => ReactElement | null;
```

### packages/select/src/components/select.tsx

```tsx
import { memo, ReactElement, useCallback, useId } from "react";

import { useIsOpen } from "@impulse-ui-native/core";
import { Control } from "@impulse-ui-native/primitives";

import { useSelect } from "../hooks/use-select.hook";
import { PrimitiveValue, SelectProps } from "../types";
import { SelectControl } from "./select-control";
import { SelectFlyout } from "./select.flyout";

function SelectComponent<Value extends PrimitiveValue>(
  props: SelectProps<Value>,
) {
  const {
    options,
    value,
    defaultValue,
    onChange,
    placeholder,
    initialScrollToSelected,
    ...rest
  } = props;

  const id = useId();

  const { isOpen, open, close } = useIsOpen();

  const { selected, hasSelected, select, isSelected, getLabel } = useSelect({
    options,
    value,
    defaultValue,
    onChange,
  });

  const handleOnSelect = useCallback(
    (value: Value) => {
      select(value);
      close();
    },
    [select, close],
  );

  const hasSelectedValue = selected !== null && selected !== undefined;

  return (
    <SelectControl {...rest} onPress={open}>
      {!hasSelected ? (
        <Control.Placeholder>{placeholder}</Control.Placeholder>
      ) : null}
      {hasSelectedValue ? (
        <Control.Value>{getLabel(selected)}</Control.Value>
      ) : null}
      <SelectFlyout
        id={id}
        title="Options"
        open={isOpen}
        options={options}
        initialScrollToSelected={initialScrollToSelected}
        isSelected={isSelected}
        onCloseFinished={close}
        onSelect={handleOnSelect}
      />
    </SelectControl>
  );
}

export const Select = memo(SelectComponent) as <Value extends PrimitiveValue>(
  props: SelectProps<Value>,
) => ReactElement | null;
```

### packages/select/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/select/src/types/index.ts

```tsx
export * from "./select.types";
```

### packages/select/src/types/select.types.ts

```tsx
import { FlyoutProps } from "@impulse-ui-native/flyout";
import {
  ControlComponentCommonProps,
  ControlComponentProps,
  PressableCoreProps,
} from "@impulse-ui-native/primitives";

export type PrimitiveValue = string | number | null | undefined;

export type SelectFn<Value extends PrimitiveValue> = (
  option: SelectOption<Value>,
) => void;

export type SelectOption<Value> = {
  label: string;
  value: Value;
  disabled?: boolean;
};

export interface CommonSelectProps<Value>
  extends Partial<ControlComponentProps>, ControlComponentCommonProps {
  loading?: boolean;
  /** Reveal the selection on each opening. Defaults to true. */
  initialScrollToSelected?: boolean;
  onChange?: (value: Value | undefined) => void;
}

export interface SelectControlProps<Value> extends CommonSelectProps<Value> {
  onPress: PressableCoreProps["onPress"];
}

export interface SelectProps<
  Value extends PrimitiveValue,
> extends CommonSelectProps<Value> {
  options: SelectOption<Value>[];
  value?: Value;
  defaultValue?: Value;
}

export interface MultiSelectProps<Value extends PrimitiveValue>
  extends Partial<ControlComponentProps>, CommonSelectProps<Value[]> {
  options: SelectOption<Value>[];
  value?: Value[];
  defaultValue?: Value[];
}

export interface SelectFlyoutProps<
  Value extends PrimitiveValue,
> extends FlyoutProps {
  options: SelectOption<Value>[];
  initialScrollToSelected?: boolean;
  isSelected: (value: Value) => boolean;
  onSelect: (value: Value) => void;
}

export interface OptionProps extends PressableCoreProps {
  label: string;
  selected: boolean;
}

export interface UseSelectProps<Value> {
  options: SelectOption<PrimitiveValue>[];
  value?: Value;
  defaultValue?: Value;
  onChange?: (value: Value | undefined) => void;
}
```
