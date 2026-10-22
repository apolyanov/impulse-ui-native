# @impulse-ui-native/flat-list

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/flat-list

Native React Native FlatList and a small hook for initial positioning with known row sizes.

## Installation

```sh
pnpm add @impulse-ui-native/flat-list
```

React and React Native are peer dependencies. No theme provider is required. The toolkit also exports this package.

## Usage

```tsx
import {
  FlatList,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";

function OptionsList({ options, selectedIndex, rowHeight, renderItem }) {
  const initialScroll = useFlatListInitialScroll({
    itemSize: rowHeight,
    initialScrollIndex: selectedIndex,
  });

  return <FlatList {...initialScroll} data={options} renderItem={renderItem} />;
}
```

The hook returns only native `initialScrollIndex` and a stable `getItemLayout`. FlatList itself performs initial scrolling and virtualization. `FlatList` is the native component, so all native props, callbacks, and refs work directly.

| Hook option          | Meaning                                                                            |
| -------------------- | ---------------------------------------------------------------------------------- |
| `itemSize`           | Actual fixed row height, or item width for a horizontal list. Include row padding. |
| `initialScrollIndex` | Native initial row index. Omit when no target is selected.                         |
| `separatorSize`      | Separator height/width, default 0.                                                 |
| `headerSize`         | Known header height/width included in offsets, default 0.                          |

Use the same size for rendered rows and `itemSize`. For multiple columns, use the native row index, not an individual item index. For rows with different known sizes, provide your own accurate native `getItemLayout` instead of this fixed-size helper.

Initial positioning follows native FlatList's mount behavior. Remount the list when a fresh initial position is needed, and mount it after asynchronously loaded data is available. Changing the selected value after initialization does not scroll an existing list.

Exports: `FlatList`, `useFlatListInitialScroll`, `FlatListProps`, `FlatListRef`, and `UseFlatListInitialScrollOptions`.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/flat-list/src/components/index.ts

```tsx
export { FlatList } from "react-native";
```

### packages/flat-list/src/hooks/index.ts

```tsx
export { useFlatListInitialScroll } from "./use-flat-list-initial-scroll.hook";
```

### packages/flat-list/src/hooks/use-flat-list-initial-scroll.hook.ts

```tsx
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

  return { initialScrollIndex: initialScrollIndex ?? undefined, getItemLayout };
}
```

### packages/flat-list/src/index.ts

```tsx
export * from "./components";
export * from "./hooks";
export type * from "./types";
```

### packages/flat-list/src/types/flat-list.types.ts

```tsx
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
```

### packages/flat-list/src/types/index.ts

```tsx
export type {
  FlatListProps,
  FlatListRef,
  UseFlatListInitialScrollOptions,
} from "./flat-list.types";
```
