import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme, FontWeightValue } from "@impulse-ui-native/theme";
import {
  FlatList,
  FlatListRef,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";
import { Typography, View } from "@impulse-ui-native/primitives";
import {
  getSelectionItemStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { getClosestIndexByValue } from "../../utils";

interface PickerColumnProps {
  data: number[];
  label: string;
  value?: number;
  initialScrollIndex?: number;
  onChange?: (value: number) => void;
}

export const PickerColumn = memo(function PickerColumn(
  props: PickerColumnProps,
) {
  const { data, label, value, initialScrollIndex = 0, onChange } = props;

  const listRef = useRef<FlatListRef<number>>(null);
  const currentIndexRef = useRef(initialScrollIndex);

  const tokens = useComponentsTokens();

  const columnTokens = tokens.timePicker.column;

  const styles = useThemedStyles(themedStyles);

  const initialScroll = useFlatListInitialScroll<number>({
    itemSize: columnTokens.itemHeight,
    initialScrollIndex,
  });

  // Android truncates snap intervals to physical pixels. Round each row's
  // offset independently so fractional pixels cannot accumulate across rows.
  const snapOffsets = useMemo(
    () => data.map((_, index) => index * columnTokens.itemHeight),
    [columnTokens.itemHeight, data],
  );

  const keyExtractor = useCallback((item: number, index: number) => {
    return `${item}-${index}`;
  }, []);

  const scrollToIndex = useCallback((index: number, animated: boolean) => {
    currentIndexRef.current = index;

    listRef.current?.scrollToIndex({
      index,
      animated,
    });
  }, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<number>) => {
      const selected = item === value;
      const appearanceTokens = getSelectionItemStateTokens(
        columnTokens.states,
        { selected },
      );
      const fontWeight = appearanceTokens.fontWeight as FontWeightValue;

      return (
        <View style={styles.item}>
          <Typography.Master
            fontSize={columnTokens.fontSize}
            color={appearanceTokens.color}
            textAlign="center"
            numberOfLines={1}
            fontWeight={fontWeight}
            numeric
          >
            {String(item).padStart(2, "0")}
          </Typography.Master>
        </View>
      );
    },
    [columnTokens.fontSize, columnTokens.states, styles.item, value],
  );

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = event.nativeEvent.contentOffset.y;
      const index = Math.round(offset / columnTokens.itemHeight);
      const newValue = data[index];

      if (newValue === value) {
        return;
      }

      currentIndexRef.current = index;

      if (newValue !== undefined) {
        onChange?.(newValue);
      }
    },
    [columnTokens.itemHeight, data, onChange, value],
  );

  useEffect(() => {
    if (value === undefined) {
      return;
    }

    const closestIndex = getClosestIndexByValue(
      data,
      value,
      currentIndexRef.current,
    );

    if (closestIndex === -1 || closestIndex === currentIndexRef.current) {
      return;
    }

    scrollToIndex(closestIndex, true);
  }, [data, scrollToIndex, value]);

  return (
    <View
      width={columnTokens.width}
      height={columnTokens.height}
      flexDirection="row"
      justifyContent="center"
      gap={columnTokens.gap}
    >
      <View
        width={columnTokens.listWidth}
        height={columnTokens.height}
        overflow="hidden"
      >
        <FlatList
          {...initialScroll}
          ref={listRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          snapToOffsets={snapOffsets}
          snapToAlignment="start"
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          onMomentumScrollEnd={onMomentumScrollEnd}
          removeClippedSubviews
          windowSize={3}
          initialNumToRender={7}
          maxToRenderPerBatch={7}
          updateCellsBatchingPeriod={50}
          scrollEventThrottle={16}
        />
      </View>

      <Typography.Body alignSelf="center">{label}</Typography.Body>
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const columnTokens = theme.components.timePicker.column;

  return StyleSheet.create({
    contentContainer: {
      paddingVertical: columnTokens.verticalPadding,
    },
    item: {
      alignItems: "center",
      height: columnTokens.itemHeight,
      justifyContent: "center",
      width: columnTokens.listWidth,
    },
  });
}
