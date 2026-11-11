import type { FlatList, FlatListProps } from "react-native";
import { useCallback, useRef } from "react";

import type { UseFlatListInitialScrollOptions } from "../types";

export function useFlatListInitialScroll<Item>(
  options: UseFlatListInitialScrollOptions,
) {
  const {
    itemSize,
    initialScrollIndex,
    separatorSize = 0,
    headerSize = 0,
  } = options;

  const ref = useRef<FlatList<Item>>(null);

  const scrollToInitialIndex = useCallback(() => {
    if (initialScrollIndex == null || initialScrollIndex < 0) {
      return;
    }

    ref.current?.scrollToIndex({ index: initialScrollIndex, animated: false });
  }, [initialScrollIndex]);

  const getItemLayout = useCallback<
    NonNullable<FlatListProps<Item>["getItemLayout"]>
  >(
    (_, index) => ({
      length: itemSize,
      offset: headerSize + (itemSize + separatorSize) * index,
      index,
    }),
    [itemSize, separatorSize, headerSize],
  );

  return {
    ref,
    initialScrollIndex: initialScrollIndex ?? undefined,
    getItemLayout,
    scrollToInitialIndex,
  };
}
