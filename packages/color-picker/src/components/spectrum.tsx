import type { ViewStyle } from "react-native";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerSizeThemeProps } from "../types";
import { OpaqueBlack, OpaqueWhite } from "../constants/color.constants";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { useSpectrumInteraction } from "../hooks/use-spectrum-interaction.hook";
import { hsvaToHex } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorPickerSpectrum = memo(function ColorPickerSpectrum() {
  const { hsva, size, disabled, setSpectrum } = useColorPickerContext();
  const interaction = useSpectrumInteraction({
    disabled,
    onChange: setSpectrum,
  });
  const styles = useThemedStyles(themedStyles, { size, disabled }, [
    size,
    disabled,
  ]);
  const hueColor = hsvaToHex({ h: hsva.h, s: 1, v: 1, a: 1 });
  const saturationColors = useMemo(() => [OpaqueWhite, hueColor], [hueColor]);
  const brightnessColors = useMemo(() => [OpaqueBlack + "00", OpaqueBlack], []);
  const positionStyle = useMemo<ViewStyle>(
    () => ({
      left: `${hsva.s * 100}%`,
      top: `${(1 - hsva.v) * 100}%`,
    }),
    [hsva.s, hsva.v],
  );
  const indicatorStyle = useMemo(
    () => [styles.indicator, positionStyle],
    [styles.indicator, positionStyle],
  );

  return (
    <GestureDetector gesture={interaction.gesture}>
      <View
        collapsable={false}
        onLayout={interaction.handleLayout}
        style={styles.root}
      >
        <View pointerEvents="none" style={styles.surface}>
          <ColorGradient colors={saturationColors} />
          <View style={styles.overlay}>
            <ColorGradient colors={brightnessColors} vertical />
          </View>
        </View>
        <View pointerEvents="none" style={indicatorStyle} />
      </View>
    </GestureDetector>
  );
});

function themedStyles(
  theme: AppTheme,
  { size, disabled }: ColorPickerSizeThemeProps,
) {
  const tokens = theme.components.colorPicker;
  const indicatorSize = tokens.sizes[size].indicatorSize;

  return StyleSheet.create({
    root: {
      height: tokens.sizes[size].spectrumHeight,
      opacity: disabled ? tokens.disabledOpacity : 1,
    },
    surface: {
      ...StyleSheet.flatten(StyleSheet.absoluteFill),
      overflow: "hidden",
      borderRadius: tokens.spectrumBorderRadius,
      borderWidth: tokens.borderWidth,
      borderColor: tokens.borderColor,
    },
    overlay: { ...StyleSheet.flatten(StyleSheet.absoluteFill) },
    indicator: {
      position: "absolute",
      width: indicatorSize,
      height: indicatorSize,
      marginLeft: -indicatorSize / 2,
      marginTop: -indicatorSize / 2,
      borderRadius: tokens.indicatorBorderRadius,
      borderWidth: tokens.indicatorBorderWidth,
      borderColor: tokens.indicatorColor,
      boxShadow: [
        {
          offsetX: tokens.indicatorShadowOffsetX,
          offsetY: tokens.indicatorShadowOffsetY,
          blurRadius: tokens.indicatorShadowBlurRadius,
          color: tokens.indicatorShadowColor,
        },
      ],
    },
  });
}
