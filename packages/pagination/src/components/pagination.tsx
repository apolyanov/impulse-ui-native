import type { LayoutChangeEvent } from "react-native";
import { memo, useMemo, useState } from "react";
import { I18nManager, StyleSheet } from "react-native";

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

  const PreviousIcon = I18nManager.isRTL ? CaretRightIcon : CaretLeftIcon;
  const NextIcon = I18nManager.isRTL ? CaretLeftIcon : CaretRightIcon;
  const previousDisabled = disabled || resolvedPage === 1;
  const nextDisabled = disabled || resolvedPage === normalizedPageCount;
  const showCompact = compact || windowLayout === "compact";

  return (
    <View {...props} onLayout={handleLayout} style={rootStyle}>
      <PaginationButton
        disabled={previousDisabled}
        Icon={PreviousIcon}
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
        Icon={NextIcon}
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
