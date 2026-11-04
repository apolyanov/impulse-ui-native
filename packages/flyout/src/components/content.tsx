import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutContentProps } from "../types";

export const FlyoutContent = memo(function FlyoutContent(
  props: FlyoutContentProps,
) {
  const tokens = useComponentsTokens();

  return (
    <View
      paddingHorizontal={tokens.flyout.contentPaddingHorizontal}
      flexShrink={1}
      {...props}
    />
  );
});
