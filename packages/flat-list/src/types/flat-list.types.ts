import type { FlatList } from "react-native";

export type { FlatListProps } from "react-native";

export type FlatListRef<Item> = FlatList<Item>;

export interface UseFlatListInitialScrollOptions {
  /** Known row height for vertical lists, or width for horizontal lists. */
  itemSize: number;
  initialScrollIndex?: number | null;
  separatorSize?: number;
  headerSize?: number;
}
