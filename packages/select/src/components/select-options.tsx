import type { ListRenderItemInfo } from "react-native";
import { useCallback, useEffect, useMemo } from "react";

import { memo, useEventCallback } from "@impulse-ui-native/core";
import {
  FlatList,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";
import { Flyout } from "@impulse-ui-native/flyout";
import { MagnifyingGlassIcon } from "@impulse-ui-native/icon/icons/magnifying-glass";
import { Input } from "@impulse-ui-native/input";
import { Spinner, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { SelectOptionsProps } from "../types/select-options.types";
import { useSelectSearch } from "../hooks/use-select-search.hook";
import { PrimitiveValue, SelectOption } from "../types";
import { getOptionId } from "../utils";
import { SelectFlyoutOption } from "./select-flyout-option";

export const SelectOptions = memo(function SelectOptions<
  Value extends PrimitiveValue,
>(props: SelectOptionsProps<Value>) {
  const {
    options,
    isSelected,
    onSelect,
    initialScrollToSelected,
    tone = "neutral",
    searchable = false,
    searchValue,
    onSearchChange,
    optionsLoading = false,
  } = props;

  const { select: tokens, controlContainer, flyout } = useComponentsTokens();
  const { query, setQuery, normalizedQuery, visibleOptions, showEmptyState } =
    useSelectSearch({
      options,
      searchable,
      searchValue,
      onSearchChange,
      optionsLoading,
    });

  const containerStyle = useMemo(
    () => ({
      height: tokens.flyoutHeight,
      flexShrink: 1,
      paddingHorizontal: flyout.contentPaddingHorizontal,
    }),
    [tokens.flyoutHeight, flyout.contentPaddingHorizontal],
  );

  const optionHeight = tokens.option.height;
  const optionsHeight = options.length * optionHeight;
  const searchHeight = searchable
    ? controlContainer.sizes.medium.height + tokens.option.padding * 2
    : 0;
  const loadingHeight = optionsLoading ? tokens.option.height : 0;
  const availableHeight = tokens.flyoutHeight - searchHeight - loadingHeight;
  const canScroll = optionsHeight > availableHeight;

  const selectedIndex = options.findIndex(
    (option) =>
      option.value !== null &&
      option.value !== undefined &&
      isSelected(option.value),
  );
  const shouldScrollToSelected =
    initialScrollToSelected &&
    !normalizedQuery &&
    canScroll &&
    selectedIndex >= 0;
  const initialScrollIndex = shouldScrollToSelected ? selectedIndex : 0;

  const { scrollToInitialIndex, ...initialScroll } = useFlatListInitialScroll<
    SelectOption<Value>
  >({
    itemSize: optionHeight,
    initialScrollIndex,
  });

  const resetScroll = useEventCallback(() => {
    if (!optionsLoading && visibleOptions.length > 0) {
      scrollToInitialIndex();
    }
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectOption<Value>>) => {
      const selected = isSelected(item.value);

      return (
        <SelectFlyoutOption
          tone={tone}
          option={item}
          selected={selected}
          onSelect={onSelect}
        />
      );
    },
    [isSelected, onSelect, tone],
  );

  useEffect(() => {
    resetScroll();
  }, [
    initialScrollToSelected,
    normalizedQuery,
    options,
    optionsLoading,
    resetScroll,
  ]);

  return (
    <Flyout.KeyboardAwareView style={containerStyle}>
      {searchable ? (
        <View padding={tokens.option.padding}>
          <Input
            PrefixIcon={MagnifyingGlassIcon}
            placeholder="Search options"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      ) : null}
      {optionsLoading ? (
        <View
          height={tokens.option.height}
          alignItems="center"
          justifyContent="center"
        >
          <Spinner tone={tone} />
        </View>
      ) : null}
      {showEmptyState ? (
        <View padding={tokens.option.padding}>
          <Typography.Body>No options found</Typography.Body>
        </View>
      ) : null}
      <FlatList
        {...initialScroll}
        onLayout={resetScroll}
        data={visibleOptions}
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
    </Flyout.KeyboardAwareView>
  );
});
