import { PrimitiveThemeTokens, TimePickerTokens } from "../types";

export function createTimePickerTokens(
  tokens: PrimitiveThemeTokens,
): TimePickerTokens {
  const ItemHeight = 50;
  const VisibleItems = 5;
  const ContainerHeight = ItemHeight * VisibleItems;
  const VerticalPadding = ContainerHeight / 2 - ItemHeight / 2;
  const ColumnWidth = 70;

  return {
    column: {
      width: ColumnWidth,
      height: ContainerHeight,
      gap: tokens.space.xxs,

      listWidth: 30,
      itemHeight: ItemHeight,
      visibleItems: VisibleItems,
      verticalPadding: VerticalPadding,
      initialScrollIndexViewOffset: -VerticalPadding,

      fontSize: tokens.fontSize.xl,
      selectedColor: tokens.colors.primary.value,
      color: tokens.colors.text.primary,
      selectedFontWeight: tokens.fontWeight.semiBold,
      fontWeight: tokens.fontWeight.regular,
    },

    flyout: {
      gap: tokens.space.msm,
    },

    columns: {
      height: ContainerHeight,
      gap: tokens.space.xs,
      indicatorHeight: ItemHeight,
      indicatorWidth: ColumnWidth * 3 + 70,
      indicatorTop: VerticalPadding,
      indicatorBorderRadius: tokens.radii.round,
      indicatorBackgroundColor: tokens.colors.surface.primary.value,
    },
  };
}
