import type { PressableProps } from "react-native";

import type { DatetimePickerCommonProps } from "./common.types";

export interface DateControlProps extends DatetimePickerCommonProps {
  onPress: PressableProps["onPress"];
}
