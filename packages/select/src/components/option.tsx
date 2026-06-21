import { memo } from "react";

import { CheckIcon, Icon } from "@impulse-ui-native/icon";
import { Pressable, Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { OptionProps } from "../types";

export const Option = memo(function Option(props: OptionProps) {
  const { label, selected, ...rest } = props;

  const tokens = useComponentsTokens();
  const optionTokens = tokens.select.option;

  return (
    <Pressable {...rest}>
      <View
        padding={optionTokens.padding}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography.Body>{label}</Typography.Body>

        <Icon
          icon={CheckIcon}
          color={optionTokens.selectedIconColor}
          opacity={
            selected
              ? optionTokens.selectedIconVisibleOpacity
              : optionTokens.selectedIconHiddenOpacity
          }
        />
      </View>
    </Pressable>
  );
});
