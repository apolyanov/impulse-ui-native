import { memo, ReactElement, useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { PrimitiveValue, SelectFlyoutProps, SelectOption } from "../types";
import { getOptionId } from "../utils";
import { Option } from "./option";

const SelectFlyoutComponent = function SelectFlyoutContent<
  Value extends PrimitiveValue,
>(props: SelectFlyoutProps<Value>) {
  const { options, isSelected, onSelect, ...rest } = props;
  const tokens = useComponentsTokens();
  const selectTokens = tokens.select;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption<Value>>) => {
      return (
        <Option
          label={item.label}
          onPress={() => onSelect(item.value)}
          disabled={item.disabled}
          selected={isSelected(item.value)}
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
