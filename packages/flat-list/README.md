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
  const { scrollToInitialIndex, ...initialScroll } = useFlatListInitialScroll({
    itemSize: rowHeight,
    initialScrollIndex: selectedIndex,
  });

  return <FlatList {...initialScroll} data={options} renderItem={renderItem} />;
}
```

Destructure `scrollToInitialIndex` before spreading the remaining result onto the list. The remaining props are a list `ref`, native `initialScrollIndex`, and a stable `getItemLayout`. Call `scrollToInitialIndex()` to reposition an existing list without animation, using the latest target index. FlatList itself performs initial scrolling and virtualization. `FlatList` is the native component, so all native props, callbacks, and refs work directly.

| Hook option          | Meaning                                                                            |
| -------------------- | ---------------------------------------------------------------------------------- |
| `itemSize`           | Actual fixed row height, or item width for a horizontal list. Include row padding. |
| `initialScrollIndex` | Native initial row index. Omit when no target is selected.                         |
| `separatorSize`      | Separator height/width, default 0.                                                 |
| `headerSize`         | Known header height/width included in offsets, default 0.                          |

Use the same size for rendered rows and `itemSize`. For multiple columns, use the native row index, not an individual item index. For rows with different known sizes, provide your own accurate native `getItemLayout` instead of this fixed-size helper.

Initial positioning follows native FlatList's mount behavior. For asynchronous data, mount the list after data is available, or call `scrollToInitialIndex()` once the target row is available and the list has laid out. Changing the target index alone does not scroll an existing list; call the method explicitly when repositioning is intended. An omitted or negative target is ignored. If you supply your own list ref, use its native scrolling methods instead.

Exports: `FlatList`, `useFlatListInitialScroll`, `FlatListProps`, `FlatListRef`, and `UseFlatListInitialScrollOptions`.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/flat-list.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
