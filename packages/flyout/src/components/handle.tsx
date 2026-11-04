import { memo } from "react";
import { GestureDetector } from "react-native-gesture-handler";

import { View } from "@impulse-ui-native/primitives";
import { getFlyoutTokens, useComponentsTokens } from "@impulse-ui-native/theme";

import type { FlyoutHandleProps } from "../types";
import { useFlyoutContext } from "../hooks";

export const FlyoutHandle = memo(function FlyoutHandle(
  props: FlyoutHandleProps,
) {
  const context = useFlyoutContext();
  const { flyout } = useComponentsTokens();
  const tokens = getFlyoutTokens(flyout, { placement: context.placement });

  return (
    <GestureDetector gesture={context.dragGesture}>
      <View
        width="100%"
        justifyContent="center"
        alignItems="center"
        height={tokens.handleContainer.height}
        {...props}
        collapsable={false}
      >
        <View {...tokens.handle} />
      </View>
    </GestureDetector>
  );
});
