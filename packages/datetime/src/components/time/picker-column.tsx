import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { memo, useCallback, useEffect, useRef } from "react";
import { FlatList, StyleSheet } from "react-native";

import type { AppTheme, FontWeightValue } from "@impulse-ui-native/theme";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import { getClosestIndexByValue } from "../../utils";

interface PickerColumnProps {
  data: number[];
  label: string;
  type: "hour" | "minute" | "second";
  format: "12h" | "24h";
  value?: number;
  initialScrollIndex?: number;
  onChange?: (value: number) => void;
}

export const PickerColumn = memo(function PickerColumn(
  props: PickerColumnProps,
) {
  const { data, label, value, initialScrollIndex = 0, onChange } = props;

  const listRef = useRef<FlatList<number>>(null);
  const currentIndexRef = useRef(initialScrollIndex);
  const tokens = useComponentsTokens();
  const columnTokens = tokens.timePicker.column;
  const styles = useThemedStyles(themedStyles);

  const keyExtractor = useCallback((item: number, index: number) => {
    return `${item}-${index}`;
  }, []);

  const getItemLayout = useCallback(
    (_: ArrayLike<number> | null | undefined, index: number) => {
      return {
        length: columnTokens.itemHeight,
        offset: columnTokens.itemHeight * index,
        index,
      };
    },
    [columnTokens.itemHeight],
  );

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
      const fontWeight: FontWeightValue = (
        selected ? columnTokens.selectedFontWeight : columnTokens.fontWeight
      ) as FontWeightValue;

      return (
        <Pressable style={styles.pressable}>
          <Typography.Master
            fontSize={columnTokens.fontSize}
            color={selected ? columnTokens.selectedColor : columnTokens.color}
            textAlign="center"
            numberOfLines={1}
            fontWeight={fontWeight}
            numeric
          >
            {String(item).padStart(2, "0")}
          </Typography.Master>
        </Pressable>
      );
    },
    [
      columnTokens.color,
      columnTokens.fontSize,
      columnTokens.fontWeight,
      columnTokens.selectedColor,
      columnTokens.selectedFontWeight,
      styles.pressable,
      value,
    ],
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

  const onScrollToIndexFailed = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToOffset({
        offset: initialScrollIndex * columnTokens.itemHeight,
        animated: false,
      });
    });
  }, [columnTokens.itemHeight, initialScrollIndex]);

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
          ref={listRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          snapToInterval={columnTokens.itemHeight}
          snapToAlignment="start"
          decelerationRate="fast"
          initialScrollIndex={initialScrollIndex}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollToIndexFailed={onScrollToIndexFailed}
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
    pressable: {
      alignItems: "center",
      height: columnTokens.itemHeight,
      justifyContent: "center",
      width: columnTokens.listWidth,
    },
  });
}
