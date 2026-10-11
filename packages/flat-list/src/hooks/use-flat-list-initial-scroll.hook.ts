import type { FlatListProps } from "react-native";
import { useCallback } from "react";

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

  return { initialScrollIndex, getItemLayout };
}
