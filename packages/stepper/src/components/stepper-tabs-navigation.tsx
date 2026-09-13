import { forwardRef, memo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useColors } from "@impulse-ui-native/theme";

import { StepperNavigationProps, StepperRef } from "../types";

export const StepperTabsNavigation = memo(
  forwardRef<StepperRef, StepperNavigationProps>(
    function StepperTabsNavigation(props, ref) {
      const colors = useColors();

      return (
        <View flexDirection="row" width="100%">
          {props.items.map((item, index) => (
            <View
              key={`${item.title ?? "step"}-${index}`}
              height={6}
              flex={1}
              backgroundColor={colors.primary.value}
            />
          ))}
        </View>
      );
    },
  ),
);
