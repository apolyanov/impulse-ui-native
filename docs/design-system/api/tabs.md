# @impulse-ui-native/tabs

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/tabs

Token-aware underline tabs for native iOS and Android. Tabs uses a flat `items` API and renders only the active panel.

## Installation

```sh
pnpm add @impulse-ui-native/tabs
```

Install React and React Native in the host application and wrap the application in `ThemeProvider` from `@impulse-ui-native/theme`. Tabs is also exported by `@impulse-ui-native/toolkit`.

## Usage

```tsx
import { Typography } from "@impulse-ui-native/primitives";
import { Tabs } from "@impulse-ui-native/tabs";

<Tabs
  defaultValue="overview"
  items={[
    {
      value: "overview",
      label: "Overview",
      content: <Typography.Master>Project overview</Typography.Master>,
    },
    {
      value: "activity",
      label: "Activity",
      content: <Typography.Master>Recent activity</Typography.Master>,
    },
    {
      value: "files",
      label: "Files",
      disabled: true,
      content: <Typography.Master>Files</Typography.Master>,
    },
  ]}
/>;
```

## API

- `items: readonly TabsItem[]`: unique string values, labels, panel content, and optional per-item `disabled`.
- `value` / `onValueChange`: controlled selection. Requests do not change the panel until the parent updates `value`.
- `defaultValue`: initial uncontrolled selection; omitted values select the first enabled item on mount.
- `disabled`: prevents all tab presses while keeping the selected panel visible.
- `size`: `small`, `medium` (default), or `large`.
- `overflow`: `scroll` (default) or `clip`. Tabs have content-width labels; scrolling uses a horizontal native ScrollView.
- `initialScrollToSelected`: defaults to `true`. In scroll mode, reveal the initially selected tab after native layout, using its measured width. Set to `false` to keep the starting position. Later selection changes do not scroll again; remount Tabs for a fresh initial position. A user drag cancels pending positioning.
- `panelStyle`: styles the active panel container. Root primitive `ViewProps` are forwarded, except `children`; the `overflow` prop controls the tab list instead of the root View.

String and number labels use the default token-aware typography. Custom React nodes own their label styling. Panels are supplied content; card chrome and padding belong to the consumer.

An empty list or a value missing from the list renders no panel. Selecting the current tab does not notify again. Disabled items cannot be pressed but an explicitly selected disabled item can still display its panel. Changing items does not silently change the selection.

Only the active panel is mounted. Switching values unmounts its content, including local component state; returning mounts it again. Inactive React elements are not mounted or prerendered. There is no lazy loading, caching, or keep-mounted mode. Creating the `items` array still evaluates ordinary JavaScript expressions; put panel effects and work inside its components.

Visuals come from `theme.components.tabs`, generated with `createTabsTokens`: primary selected text and underline, secondary inactive text, disabled text, a subtle baseline, shared sizes, and panel spacing. The `states` map defines `unselected`, `selected`, `disabledUnselected`, and `disabledSelected` appearances. `getTabsItemTokens` resolves these states together with size tokens, including label color and indicator color/opacity. Both default light and dark themes are supported.

Exports: `Tabs`, `TabsProps`, `TabsItem`, and `TabsOverflow`.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/tabs/src/components/index.ts

```tsx
export { Tabs } from "./tabs";
```

### packages/tabs/src/components/tabs.tsx

```tsx
import { memo, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useControllableState } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import {
  ScrollView,
  useScrollViewInitialScroll,
} from "@impulse-ui-native/scroll-view";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { TabsProps } from "../types";
import { TabButton } from "./tab-button";

export const Tabs = memo(function Tabs({
  items,
  defaultValue,
  disabled = false,
  initialScrollToSelected = true,
  onValueChange,
  overflow = "scroll",
  panelStyle,
  size = "medium",
  style,
  value,
  ...props
}: TabsProps) {
  const initialValue = useMemo(
    () => defaultValue ?? items.find((item) => !item.disabled)?.value,
    [defaultValue, items],
  );

  const [selectedValue, setSelectedValue] = useControllableState<string>({
    prop: value,
    defaultProp: initialValue,
    onChange: onValueChange,
  });
  const initialSelectedValue = useRef(selectedValue).current;
  const initialScroll = useScrollViewInitialScroll({
    horizontal: true,
    enabled: overflow === "scroll" && initialScrollToSelected,
  });
  const styles = useThemedStyles(themedStyles);

  const selectedItem = useMemo(
    () => items.find((item) => item.value === selectedValue),
    [items, selectedValue],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);
  const tabButtons = useMemo(
    () =>
      items.map((item) => {
        const itemDisabled = disabled || Boolean(item.disabled);

        return (
          <TabButton
            key={item.value}
            item={item}
            disabled={itemDisabled}
            selected={item.value === selectedValue}
            size={size}
            onSelect={setSelectedValue}
            initialScrollRef={
              item.value === initialSelectedValue
                ? initialScroll.targetRef
                : undefined
            }
            onLayout={
              item.value === initialSelectedValue
                ? initialScroll.onTargetLayout
                : undefined
            }
          />
        );
      }),
    [
      disabled,
      items,
      selectedValue,
      setSelectedValue,
      size,
      initialSelectedValue,
      initialScroll.targetRef,
      initialScroll.onTargetLayout,
    ],
  );
  const activePanel = useMemo(
    () =>
      selectedItem ? (
        <View key={selectedItem.value} style={panelStyle}>
          {selectedItem.content}
        </View>
      ) : null,
    [panelStyle, selectedItem],
  );

  return (
    <View {...props} style={rootStyle}>
      <View style={styles.list}>
        <ScrollView
          ref={initialScroll.scrollViewRef}
          onLayout={initialScroll.onLayout}
          onContentSizeChange={initialScroll.onContentSizeChange}
          onScrollBeginDrag={initialScroll.onScrollBeginDrag}
          horizontal
          directionalLockEnabled
          scrollEnabled={overflow === "scroll"}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          {tabButtons}
        </ScrollView>
      </View>
      {activePanel}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.tabs;

  return StyleSheet.create({
    root: { gap: tokens.panelGap },
    list: {
      borderBottomColor: tokens.borderColor,
      borderBottomWidth: tokens.borderWidth,
      overflow: "hidden",
    },
    scroll: { flexGrow: 0 },
    content: { alignItems: "stretch", flexDirection: "row" },
  });
}
```

### packages/tabs/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/tabs/src/types/index.ts

```tsx
export type { TabsItem, TabsOverflow, TabsProps } from "./tabs.types";
```

### packages/tabs/src/types/tabs.types.ts

```tsx
import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { ComponentSize } from "@impulse-ui-native/theme";

export interface TabsItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type TabsOverflow = "clip" | "scroll";

interface TabsCommonProps extends Omit<ViewProps, "children" | "overflow"> {
  items: readonly TabsItem[];
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  /** Reveal the initially selected tab in scroll mode. Defaults to true. */
  initialScrollToSelected?: boolean;
  overflow?: TabsOverflow;
  panelStyle?: StyleProp<ViewStyle>;
  size?: ComponentSize;
}

interface TabsControlledProps extends TabsCommonProps {
  value: string;
  defaultValue?: never;
}

interface TabsUncontrolledProps extends TabsCommonProps {
  value?: never;
  defaultValue?: string;
}

export type TabsProps = TabsControlledProps | TabsUncontrolledProps;
```
