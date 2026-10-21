import type { ComponentProps } from "react";
import { memo } from "react";

import type {
  BorderSizeKey,
  RadiusKey,
  SpaceSizesKey,
} from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

type ViewPreviewProps = Omit<
  ComponentProps<typeof View>,
  | "padding"
  | "paddingHorizontal"
  | "paddingVertical"
  | "gap"
  | "borderRadius"
  | "borderWidth"
> & {
  padding?: number | SpaceSizesKey;
  paddingHorizontal?: number | SpaceSizesKey;
  paddingVertical?: number | SpaceSizesKey;
  gap?: number | SpaceSizesKey;
  borderRadius?: number | RadiusKey;
  borderWidth?: number | BorderSizeKey;
  surface?: "canvas" | "elevated";
};

export const ViewPreview = memo(function ViewPreview({
  surface,
  padding,
  paddingHorizontal,
  paddingVertical,
  gap,
  borderRadius,
  borderWidth,
  ...props
}: ViewPreviewProps) {
  const { colors, space, radii, borderSize } = useTheme();

  return (
    <View
      backgroundColor={surface ? colors.surface[surface].value : undefined}
      borderColor={colors.border.default.value}
      {...props}
      padding={typeof padding === "string" ? space[padding] : padding}
      paddingHorizontal={
        typeof paddingHorizontal === "string"
          ? space[paddingHorizontal]
          : paddingHorizontal
      }
      paddingVertical={
        typeof paddingVertical === "string"
          ? space[paddingVertical]
          : paddingVertical
      }
      gap={typeof gap === "string" ? space[gap] : gap}
      borderRadius={
        typeof borderRadius === "string" ? radii[borderRadius] : borderRadius
      }
      borderWidth={
        typeof borderWidth === "string" ? borderSize[borderWidth] : borderWidth
      }
    />
  );
});
