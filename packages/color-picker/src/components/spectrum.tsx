import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ColorPickerSizeThemeProps } from "../types";
import { OpaqueBlack } from "../constants/color.constants";
import { SaturationStops } from "../constants/motion.constants";
import { useColorPickerContext } from "../hooks/use-color-picker-context.hook";
import { useSpectrumInteraction } from "../hooks/use-spectrum-interaction.hook";
import { hsvaToHex } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorPickerSpectrum = memo(function ColorPickerSpectrum() {
  const { hsva, size, disabled, gesture, motion } = useColorPickerContext();
  const interaction = useSpectrumInteraction({
    disabled,
    onChange: gesture.setSpectrum,
    onChangeWorklet: motion.setSpectrum,
    onComplete: motion.finish,
    saturation: hsva.s,
    brightness: hsva.v,
  });
  const styles = useThemedStyles(themedStyles, { size, disabled }, [
    size,
    disabled,
  ]);
  const hue = motion.hue;
  const hueStyle = useAnimatedStyle(() => ({
    backgroundColor: hsvaToHex({ h: hue.get(), s: 1, v: 1, a: 1 }),
  }));
  const surfaceStyle = useMemo(
    () => [styles.surface, hueStyle],
    [styles.surface, hueStyle],
  );
  const brightnessColors = useMemo(() => [OpaqueBlack + "00", OpaqueBlack], []);
  const indicatorStyle = useMemo(
    () => [styles.indicator, interaction.indicatorStyle],
    [styles.indicator, interaction.indicatorStyle],
  );

  return (
    <GestureDetector gesture={interaction.gesture}>
      <View
        collapsable={false}
        onLayout={interaction.handleLayout}
        style={styles.root}
      >
        <Animated.View pointerEvents="none" style={surfaceStyle}>
          <ColorGradient colors={SaturationStops} />
          <View style={styles.overlay}>
            <ColorGradient colors={brightnessColors} vertical />
          </View>
        </Animated.View>
        <Animated.View pointerEvents="none" style={indicatorStyle} />
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
      left: 0,
      top: 0,
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
