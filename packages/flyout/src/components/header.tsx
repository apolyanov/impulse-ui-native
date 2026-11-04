import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutHeaderProps } from "../types";

export const FlyoutHeader = memo(function FlyoutHeader(
  props: FlyoutHeaderProps,
) {
  const {
    flyout: { title: tokens },
  } = useComponentsTokens();

  return (
    <View
      paddingVertical={tokens.paddingVertical}
      paddingHorizontal={tokens.paddingHorizontal}
      alignItems="center"
      {...props}
    />
  );
});
