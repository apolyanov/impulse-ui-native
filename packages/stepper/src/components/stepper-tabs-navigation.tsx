import { forwardRef, memo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { StepperNavigationProps, StepperRef } from "../types";

export const StepperTabsNavigation = memo(
  forwardRef<StepperRef, StepperNavigationProps>(
    function StepperTabsNavigation(props, ref) {
      const tokens = useComponentsTokens();
      const navigationTokens = tokens.stepper.navigation;

      return (
        <View flexDirection="row" width="100%">
          {props.items.map((item, index) => (
            <View
              key={`${item.title ?? "step"}-${index}`}
              height={navigationTokens.itemHeight}
              flex={1}
              backgroundColor={navigationTokens.itemBackgroundColor}
            />
          ))}
        </View>
      );
    },
  ),
);
