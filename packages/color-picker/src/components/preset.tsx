import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ColorPickerPresetEntryProps } from "../types";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import {
  getColorContrast,
  parseHexColor,
  rgbaToHex,
} from "../utils/color.utils";
import { ColorPickerSwatch } from "./swatch";

export const ColorPickerPresetEntry = memo(function ColorPickerPresetEntry({
  preset,
}: ColorPickerPresetEntryProps) {
  const { value, size } = useColorPickerContext();
  const tokens = useComponentsTokens().colorPicker;
  const parsed = parseHexColor(preset.color);
  const selected = parsed !== undefined && rgbaToHex(parsed) === value;

  return (
    <View alignItems="center" gap={tokens.presetLabelGap}>
      <ColorPickerSwatch color={preset.color} disabled={preset.disabled}>
        {selected ? (
          <Icon
            icon={CheckIcon}
            variant="bold"
            size={tokens.sizes[size].swatchCheckSize}
            color={getColorContrast(parsed)}
          />
        ) : null}
      </ColorPickerSwatch>
      <Typography.Caption>{preset.label}</Typography.Caption>
    </View>
  );
});
