import { memo } from "react";
import { StyleSheet } from "react-native";

import type {
  AppTheme,
  ComponentTone,
  FieldVariant,
} from "@impulse-ui-native/theme";
import {
  Button,
  Pressable,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import { DatetimePickerFlyoutCommonProps } from "../../types";

interface DatetimePickerFlyoutActionsProps {
  tone?: ComponentTone;
  variant?: FieldVariant;
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
    const styles = useThemedStyles(themedStyles);

    const flyoutActionsTokens = tokens.datetimePicker.flyoutActions;

    const tone = props.tone ?? "neutral";
    const clearColor = flyoutActionsTokens.colors[tone].clearColor;

    return (
      <View gap={flyoutActionsTokens.gap}>
        {props.canClear ? (
          <Pressable style={styles.clear} onPress={props.onPressClear}>
            <Typography.BodyLarge color={clearColor}>
              Clear
            </Typography.BodyLarge>
          </Pressable>
        ) : null}

        <View flexDirection="row" gap={flyoutActionsTokens.buttonsGap}>
          <Button
            tone={tone}
            variant={props.variant ?? "outlined"}
            style={styles.action}
            onPress={props.onPressCancel}
          >
            Cancel
          </Button>
          <Button
            tone={tone}
            variant={props.variant ?? "outlined"}
            style={styles.action}
            onPress={props.onPressApply}
          >
            Apply
          </Button>
        </View>
      </View>
    );
  },
);

function themedStyles(_theme: AppTheme) {
  return StyleSheet.create({
    clear: {
      alignSelf: "center",
    },
    action: {
      flex: 1,
    },
  });
}
