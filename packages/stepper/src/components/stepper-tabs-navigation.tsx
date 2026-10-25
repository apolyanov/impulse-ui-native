import { forwardRef, memo, useContext } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { StepperContext } from "../contexts/stepper.context";
import { StepperNavigationProps, StepperRef } from "../types";

export const StepperTabsNavigation = memo(
  forwardRef<StepperRef, StepperNavigationProps>(
    function StepperTabsNavigation(props, _ref) {
      const context = useContext(StepperContext);
      const tokens = useComponentsTokens();

      const tone = props.tone ?? context?.tone ?? "primary";
      const navigationTokens = tokens.stepper.navigation;

      return (
        <View flexDirection="row" width="100%">
          {props.items.map((item, index) => {
            const completedOrCurrent = index <= props.current;
            const backgroundColor = completedOrCurrent
              ? navigationTokens.colors[tone].itemBackgroundColor
              : navigationTokens.inactiveItemBackgroundColor;

            return (
              <View
                key={`${item.title ?? "step"}-${index}`}
                height={navigationTokens.itemHeight}
                flex={1}
                backgroundColor={backgroundColor}
              />
            );
          })}
        </View>
      );
    },
  ),
);
