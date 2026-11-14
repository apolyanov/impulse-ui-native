import { memo } from "react";
import { GestureDetector } from "react-native-gesture-handler";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutContentProps } from "../types";
import { useFlyoutDragContext } from "../hooks";

export const FlyoutContent = memo(function FlyoutContent(
  props: FlyoutContentProps,
) {
  const { dragGesture } = useFlyoutDragContext();
  const tokens = useComponentsTokens();

  return (
    <GestureDetector gesture={dragGesture}>
      <View
        paddingHorizontal={tokens.flyout.contentPaddingHorizontal}
        flexShrink={1}
        {...props}
        collapsable={false}
      />
    </GestureDetector>
  );
});
