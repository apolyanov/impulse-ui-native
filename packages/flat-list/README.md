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
