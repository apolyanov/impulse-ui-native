import { memo } from "react";

import {
  Button,
  Pressable,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DatetimePickerFlyoutCommonProps } from "../../types";

interface DatetimePickerFlyoutActionsProps {
  canClear?: boolean;
  onPressApply: DatetimePickerFlyoutCommonProps["onPressApply"];
  onPressCancel: DatetimePickerFlyoutCommonProps["onPressCancel"];
  onPressClear: DatetimePickerFlyoutCommonProps["onPressClear"];
}

export const DatetimePickerFlyoutActions = memo(
  function DatetimePickerFlyoutActions(
    props: DatetimePickerFlyoutActionsProps,
  ) {
    const tokens = useComponentsTokens();
    const flyoutActionsTokens = tokens.datetimePicker.flyoutActions;

    return (
      <View gap={flyoutActionsTokens.gap}>
        {props.canClear ? (
          <View alignItems="center">
            <Pressable onPress={props.onPressClear}>
              <Typography.BodyLarge color={flyoutActionsTokens.clearColor}>
                Clear
              </Typography.BodyLarge>
            </Pressable>
          </View>
        ) : null}

        <View flexDirection="row" gap={flyoutActionsTokens.buttonsGap}>
          <View flex={1}>
            <Button onPress={props.onPressCancel} variant="outlined">
              Cancel
            </Button>
          </View>

          <View flex={1}>
            <Button onPress={props.onPressApply}>Apply</Button>
          </View>
        </View>
      </View>
    );
  },
);
