import { memo, ReactElement, useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";
import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { PrimitiveValue, SelectFlyoutProps, SelectOption } from "../types";
import { getOptionId } from "../utils";
import { Option } from "./option";

interface SelectFlyoutOptionProps<Value extends PrimitiveValue> {
  option: SelectOption<Value>;
  selected: boolean;
  onSelect: (value: Value) => void;
}

function SelectFlyoutOptionComponent<Value extends PrimitiveValue>(
  props: SelectFlyoutOptionProps<Value>,
) {
  const handlePress = useEventCallback(() =>
    props.onSelect(props.option.value),
  );

  return (
    <Option
      label={props.option.label}
      onPress={handlePress}
      disabled={props.option.disabled}
      selected={props.selected}
    />
  );
}

const SelectFlyoutOption = memo(SelectFlyoutOptionComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectFlyoutOptionProps<Value>,
) => ReactElement | null;

const SelectFlyoutComponent = function SelectFlyoutContent<
  Value extends PrimitiveValue,
>(props: SelectFlyoutProps<Value>) {
  const { options, isSelected, onSelect, ...rest } = props;
  const tokens = useComponentsTokens();
  const selectTokens = tokens.select;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption<Value>>) => {
      return (
        <SelectFlyoutOption
          option={item}
          selected={isSelected(item.value)}
          onSelect={onSelect}
        />
      );
    },
    [isSelected, onSelect],
  );

  return (
    <Portal>
      <Flyout {...rest}>
        <View height={selectTokens.flyoutHeight}>
          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={getOptionId}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            removeClippedSubviews
            windowSize={5}
            initialNumToRender={12}
            maxToRenderPerBatch={12}
            updateCellsBatchingPeriod={32}
          />
        </View>
      </Flyout>
    </Portal>
  );
};

export const SelectFlyout = memo(SelectFlyoutComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectFlyoutProps<Value>,
) => ReactElement | null;
