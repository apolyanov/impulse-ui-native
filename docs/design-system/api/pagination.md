# @impulse-ui-native/pagination

Local package version: 11.0.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/pagination

Token-aware page navigation for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/pagination
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.
The package expects compatible `react`, `react-native`, and `react-native-svg`
peer dependencies in the host application.

## Usage

```tsx
import { Pagination } from "@impulse-ui-native/pagination";

export function ResultsPagination() {
  return <Pagination defaultPage={1} pageCount={12} />;
}
```

Use `page` and `onPageChange` for controlled state, or `defaultPage` for
uncontrolled state. Page values are normalized to the available range.

Set `compact` for the mobile-friendly previous/status/next layout:

```tsx
<Pagination compact defaultPage={3} pageCount={12} />
```

The control supports `small`, `medium`, and `large` sizes. Its visible page
window adapts to the measured width: it shows up to seven page items, condenses
to five items around the current page, and falls back to the compact status
layout when space is tighter. Set `compact` to force that layout. Override
`getCompactLabel` to localize the visible compact status text.

Pagination items use the shared primitives `Pressable`; pressed feedback comes
from that primitive and is not modeled as Pagination state or theme tokens.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/pagination/src/components/index.ts

```tsx
export { Pagination } from "./pagination";
```

### packages/pagination/src/components/pagination.tsx

```tsx
import type { LayoutChangeEvent } from "react-native";
import { memo, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";
import { CaretLeftIcon } from "@impulse-ui-native/icon/icons/caret-left";
import { CaretRightIcon } from "@impulse-ui-native/icon/icons/caret-right";
import { Typography, View } from "@impulse-ui-native/primitives";
import {
  getPaginationStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { PaginationProps, PaginationThemeProps } from "../types";
import {
  clampPage,
  getDefaultCompactLabel,
  getPaginationItems,
  getPaginationWindowLayout,
  normalizePageCount,
} from "../utils";
import { PaginationButton } from "./pagination-button";

export const Pagination = memo(function Pagination({
  compact = false,
  defaultPage = 1,
  disabled = false,
  getCompactLabel = getDefaultCompactLabel,
  onLayout,
  onPageChange,
  page: pageProp,
  pageCount,
  size = "medium",
  style,
  ...props
}: PaginationProps) {
  const tokens = useComponentsTokens().pagination;

  const [availableWidth, setAvailableWidth] = useState<number>();

  const normalizedPageCount = normalizePageCount(pageCount);

  const [page, setPage] = useControllableState<number>({
    prop: pageProp,
    defaultProp: clampPage(defaultPage, normalizedPageCount),
    onChange: onPageChange,
  });

  const resolvedPage = clampPage(page, normalizedPageCount);

  const styles = useThemedStyles(themedStyles, { disabled, size }, [
    disabled,
    size,
  ]);

  const windowLayout = useMemo(
    () =>
      getPaginationWindowLayout(
        availableWidth,
        normalizedPageCount,
        tokens.sizes[size].controlSize,
        tokens.sizes[size].compactMinWidth,
        tokens.gap,
      ),
    [availableWidth, normalizedPageCount, size, tokens.gap, tokens.sizes],
  );
  const items = useMemo(
    () =>
      getPaginationItems(
        resolvedPage,
        normalizedPageCount,
        windowLayout === "condensed" ? 5 : 7,
      ),
    [normalizedPageCount, resolvedPage, windowLayout],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);

  const selectPage = useEventCallback((nextPage: number) => {
    if (!disabled) {
      setPage(clampPage(nextPage, normalizedPageCount));
    }
  });

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    setAvailableWidth(event.nativeEvent.layout.width);
    onLayout?.(event);
  });

  const previousDisabled = disabled || resolvedPage === 1;
  const nextDisabled = disabled || resolvedPage === normalizedPageCount;
  const showCompact = compact || windowLayout === "compact";

  return (
    <View {...props} onLayout={handleLayout} style={rootStyle}>
      <PaginationButton
        disabled={previousDisabled}
        Icon={CaretLeftIcon}
        onSelect={selectPage}
        size={size}
        targetPage={resolvedPage - 1}
      />

      {showCompact ? (
        <View style={styles.compactStatus}>
          <Typography.Label numeric style={styles.compactLabel}>
            {getCompactLabel(resolvedPage, normalizedPageCount)}
          </Typography.Label>
        </View>
      ) : (
        items.map((item) =>
          typeof item === "number" ? (
            <PaginationButton
              key={item}
              current={item === resolvedPage}
              disabled={disabled}
              label={item}
              onSelect={selectPage}
              size={size}
              targetPage={item}
            />
          ) : (
            <View key={item} style={styles.ellipsis}>
              <Typography.Label style={styles.ellipsisLabel}>
                {"\u2026"}
              </Typography.Label>
            </View>
          ),
        )
      )}

      <PaginationButton
        disabled={nextDisabled}
        Icon={CaretRightIcon}
        onSelect={selectPage}
        size={size}
        targetPage={resolvedPage + 1}
      />
    </View>
  );
});

function themedStyles(theme: AppTheme, props: PaginationThemeProps) {
  const tokens = theme.components.pagination;
  const sizeTokens = tokens.sizes[props.size];
  const statusTokens = getPaginationStateTokens(tokens.states, {
    current: false,
    disabled: props.disabled,
  });

  return StyleSheet.create({
    root: {
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: tokens.gap,
    },
    compactStatus: {
      alignItems: "center",
      justifyContent: "center",

      minWidth: sizeTokens.compactMinWidth,
      height: sizeTokens.controlSize,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      backgroundColor: statusTokens.backgroundColor,
      borderColor: statusTokens.borderColor,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
    },
    compactLabel: {
      color: statusTokens.color,
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
    ellipsis: {
      alignItems: "center",
      justifyContent: "center",
      width: sizeTokens.controlSize,
      height: sizeTokens.controlSize,
    },
    ellipsisLabel: {
      color: statusTokens.ellipsisColor,
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
  });
}
```

### packages/pagination/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/pagination/src/types/index.ts

```tsx
export * from "./pagination.types";
```

### packages/pagination/src/types/pagination.types.ts

```tsx
import type { ViewProps } from "react-native";

import type { ComponentSize } from "@impulse-ui-native/theme";

export type PaginationItemValue = number | "start-ellipsis" | "end-ellipsis";

export type PaginationCompactLabelFormatter = (
  page: number,
  pageCount: number,
) => string;

interface PaginationCommonProps extends Omit<ViewProps, "children"> {
  compact?: boolean;
  disabled?: boolean;
  getCompactLabel?: PaginationCompactLabelFormatter;
  onPageChange?: (page: number) => void;
  pageCount: number;
  size?: ComponentSize;
}

interface PaginationControlledProps extends PaginationCommonProps {
  defaultPage?: never;
  page: number;
}

interface PaginationUncontrolledProps extends PaginationCommonProps {
  defaultPage?: number;
  page?: never;
}

export type PaginationProps =
  PaginationControlledProps | PaginationUncontrolledProps;

export interface PaginationThemeProps {
  disabled: boolean;
  size: ComponentSize;
}

export interface PaginationButtonThemeProps {
  current: boolean;
  disabled: boolean;
  size: ComponentSize;
}
```
