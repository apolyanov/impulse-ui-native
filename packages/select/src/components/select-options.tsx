import type { ListRenderItemInfo } from "react-native";
import { memo, ReactElement, useCallback, useRef } from "react";

import {
  FlatList,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SelectOptionsProps } from "../types/select-options.types";
import { PrimitiveValue, SelectOption } from "../types";
import { getOptionId } from "../utils";
import { SelectFlyoutOption } from "./select-flyout-option";

const SelectOptionsComponent = function SelectOptions<
  Value extends PrimitiveValue,
>(props: SelectOptionsProps<Value>) {
  const { options, isSelected, onSelect, initialScrollToSelected } = props;

  const initialSelection = useRef(isSelected);

  const tokens = useComponentsTokens();

  // Capture selection at opening, including when options arrive later.
  const selectedIndex = options.findIndex(
    (option) =>
      option.value !== null &&
      option.value !== undefined &&
      initialSelection.current(option.value),
  );
  const initialScroll = useFlatListInitialScroll<SelectOption<Value>>({
    itemSize: tokens.select.option.height,
    initialScrollIndex:
      initialScrollToSelected && selectedIndex >= 0 ? selectedIndex : undefined,
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption<Value>>) => (
      <SelectFlyoutOption
        option={item}
        selected={isSelected(item.value)}
        onSelect={onSelect}
      />
    ),
    [isSelected, onSelect],
  );

  return (
    <FlatList
      {...initialScroll}
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
  );
};

export const SelectOptions = memo(SelectOptionsComponent) as <
  Value extends PrimitiveValue,
>(
  props: SelectOptionsProps<Value>,
) => ReactElement | null;
