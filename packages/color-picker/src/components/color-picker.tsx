import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useComponentsTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerProps } from "../types";
import { ColorPickerAlphaInput } from "./alpha-input";
import { ColorPickerAlphaSlider } from "./alpha-slider";
import { ColorPickerApply } from "./apply";
import { ColorPickerCancel } from "./cancel";
import { ColorPickerChannelInput } from "./channel-input";
import { ColorPickerHexInput } from "./hex-input";
import { ColorPickerHueSlider } from "./hue-slider";
import { ColorPickerPresetEntry } from "./preset";
import { ColorPickerPreview } from "./preview";
import { ColorPickerRoot } from "./root";
import { ColorPickerSpectrum } from "./spectrum";

export const ColorPickerComponent = memo(function ColorPicker({
  showAlpha = true,
  showPresets = true,
  presets,
  presetsLabel = "Theme colors",
  commitMode = "immediate",
  ...props
}: ColorPickerProps) {
  const tokens = useComponentsTokens().colorPicker;
  const styles = useThemedStyles(themedStyles);
  const palette = presets ?? tokens.presets;

  const hasPresets = showPresets && palette.length > 0;

  return (
    <ColorPickerRoot {...props} commitMode={commitMode}>
      <Typography.Title4 color={tokens.labelColor}>
        Choose color
      </Typography.Title4>
      <ColorPickerSpectrum />
      <View gap={tokens.sliderLabelGap}>
        <Typography.Caption>Hue</Typography.Caption>
        <ColorPickerHueSlider />
      </View>
      {showAlpha ? (
        <View gap={tokens.sliderLabelGap}>
          <Typography.Caption>Opacity</Typography.Caption>
          <ColorPickerAlphaSlider />
        </View>
      ) : null}
      <View style={styles.row}>
        <ColorPickerPreview />
        <View style={styles.field}>
          <ColorPickerHexInput label="HEX" />
        </View>
        {showAlpha ? (
          <View style={styles.alphaField}>
            <ColorPickerAlphaInput label="Opacity (%)" />
          </View>
        ) : null}
      </View>
      <View style={styles.row}>
        <View style={styles.field}>
          <ColorPickerChannelInput channel="r" label="R" />
        </View>
        <View style={styles.field}>
          <ColorPickerChannelInput channel="g" label="G" />
        </View>
        <View style={styles.field}>
          <ColorPickerChannelInput channel="b" label="B" />
        </View>
      </View>
      {hasPresets ? (
        <View gap={tokens.presetsLabelGap}>
          <Typography.Label>{presetsLabel}</Typography.Label>
          <View style={styles.palette}>
            {palette.map((preset, index) => (
              <ColorPickerPresetEntry
                key={preset.label + index}
                preset={preset}
              />
            ))}
          </View>
        </View>
      ) : null}
      {commitMode === "confirm" ? (
        <View style={styles.row}>
          <ColorPickerCancel style={styles.action}>Cancel</ColorPickerCancel>
          <ColorPickerApply style={styles.action}>Apply color</ColorPickerApply>
        </View>
      ) : null}
    </ColorPickerRoot>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.colorPicker;

  return StyleSheet.create({
    row: { flexDirection: "row", alignItems: "flex-end", gap: tokens.rowGap },
    field: { flex: 1, minWidth: 0 },
    alphaField: { flex: tokens.alphaFieldFlex, minWidth: 0 },
    palette: { flexDirection: "row", flexWrap: "wrap", gap: tokens.presetsGap },
    action: { flex: 1 },
  });
}
