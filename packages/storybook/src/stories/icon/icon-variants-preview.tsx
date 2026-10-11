import { memo } from "react";

import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
import { View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import { IconVariants } from "./icon-variants.constants";

export const IconVariantsPreview = memo(function IconVariantsPreview() {
  const { colors, space } = useTheme();

  return (
    <View flexDirection="row" flexWrap="wrap" gap={space.sm}>
      {IconVariants.map((variant) => (
        <HeartIcon
          key={variant}
          variant={variant}
          width={28}
          height={28}
          color={colors.primary.value}
        />
      ))}
    </View>
  );
});
