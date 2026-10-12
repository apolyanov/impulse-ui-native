import { memo, useCallback, useMemo, useState } from "react";
import { ScrollView } from "react-native";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { useEventCallback } from "@impulse-ui-native/core";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

import type { ColorPickerPerformanceMode } from "./types/color-picker-performance.types";
import { PerformanceModes } from "./constants/color-picker-performance.constants";
import { useColorPickerFrameStats } from "./hooks/use-color-picker-frame-stats.hook";

export const ColorPickerPerformanceExample = memo(
  function ColorPickerPerformanceExample() {
    const [mode, setMode] = useState<ColorPickerPerformanceMode>("spectrum");
    const [value, setValue] = useState("#F55D6B");
    const stats = useColorPickerFrameStats();
    const handleChange = useEventCallback((next: string) => {
      setValue(next);
    });
    const controls = useMemo(
      () =>
        PerformanceModes.map((option) => ({
          ...option,
          onPress: () => setMode(option.value),
        })),
      [setMode],
    );
    const renderMode = useCallback(
      (option: (typeof controls)[number]) => {
        return (
          <Button
            key={option.value}
            size="small"
            variant={mode === option.value ? "filled" : "outlined"}
            onPress={option.onPress}
          >
            {option.label}
          </Button>
        );
      },
      [mode],
    );

    return (
      <ScrollView>
        <View gap={12} padding={16}>
          <Typography.Title4>ColorPicker frame-time probe</Typography.Title4>
          <Typography.Master>
            Drag continuously for several seconds in each mode. A 120 Hz UI
            callback cadence is about 8.3 ms per frame; 60 Hz is about 16.7 ms.
            Compare the idle baseline with dragging on the same device and
            build.
          </Typography.Master>
          <Typography.Code>
            {stats.elapsed > 0
              ? `${((stats.frames * 1000) / stats.elapsed).toFixed(1)} UI callbacks/s | ${(stats.elapsed / stats.frames).toFixed(1)} ms average | ${stats.worstInterval.toFixed(1)} ms worst | ${stats.slowFrames} frames over 12.5 ms`
              : "Waiting for frame samples…"}
          </Typography.Code>
          <Typography.Caption>
            Samples UI callback timing, not GPU presentation. Readouts update
            once per second. Use a release build for representative results.
          </Typography.Caption>
          <View flexDirection="row" flexWrap="wrap" gap={8}>
            {controls.map(renderMode)}
          </View>
          {mode === "spectrum" ? (
            <ColorPicker.Root key={mode} value={value} commitMode="confirm">
              <ColorPicker.Spectrum />
            </ColorPicker.Root>
          ) : null}
          {mode !== "spectrum" ? (
            <ColorPicker
              key={mode}
              value={value}
              showAlpha={mode !== "noAlpha"}
              commitMode={mode === "confirm" ? "confirm" : "immediate"}
              onChange={handleChange}
            />
          ) : null}
        </View>
      </ScrollView>
    );
  },
);
