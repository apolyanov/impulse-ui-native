import type { ListRenderItemInfo } from "react-native";
import { useCallback, useMemo, useRef } from "react";

import { memo } from "@impulse-ui-native/core";
import {
  FlatList,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SelectOptionsProps } from "../types/select-options.types";
import { PrimitiveValue, SelectOption } from "../types";
import { getOptionId } from "../utils";
import { SelectFlyoutOption } from "./select-flyout-option";

export const SelectOptions = memo(function SelectOptions<
  Value extends PrimitiveValue,
>(props: SelectOptionsProps<Value>) {
  const { options, isSelected, onSelect, initialScrollToSelected } = props;

  const initialSelection = useRef(isSelected);

  const { select: tokens } = useComponentsTokens();

  const optionHeight = tokens.option.height;
  const optionsHeight = options.length * optionHeight;
  const canScroll = optionsHeight > tokens.flyoutHeight;

  const selectedIndex = useMemo(
    () =>
      options.findIndex(
        (option) =>
          option.value !== null &&
          option.value !== undefined &&
          initialSelection.current(option.value),
      ),
    [options],
  );

  const shouldScrollToSelected =
    initialScrollToSelected && canScroll && selectedIndex >= 0;
  const initialScrollIndex = shouldScrollToSelected ? selectedIndex : undefined;

  const initialScroll = useFlatListInitialScroll<SelectOption<Value>>({
    itemSize: optionHeight,
    initialScrollIndex,
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption<Value>>) => {
      const selected = isSelected(item.value);

      return (
        <SelectFlyoutOption
          option={item}
          selected={selected}
          onSelect={onSelect}
        />
      );
    },
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
});
