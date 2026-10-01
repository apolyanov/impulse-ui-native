import type { ComponentProps } from "react";
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useColors } from "@impulse-ui-native/theme";

type ViewPreviewProps = ComponentProps<typeof View> & {
  surface?: "primary" | "elevated";
};

export const ViewPreview = memo(function ViewPreview({
  surface,
  ...props
}: ViewPreviewProps) {
  const colors = useColors();

  return (
    <View
      backgroundColor={surface ? colors.surface[surface].value : undefined}
      borderColor={colors.border.default.value}
      {...props}
    />
  );
});
