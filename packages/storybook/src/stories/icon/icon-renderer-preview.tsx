import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { SparkleIcon } from "@impulse-ui-native/icon/icons/sparkle";
import { useColors } from "@impulse-ui-native/theme";

export const IconRendererPreview = memo(function IconRendererPreview() {
  const colors = useColors();

  return (
    <Icon
      icon={SparkleIcon}
      size="large"
      variant="duotone"
      color={colors.primary.value}
    />
  );
});
