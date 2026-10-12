import { memo, useState } from "react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import { StoryExample } from "../../components/story-example";

export const ColorPickerCompositionExample = memo(
  function ColorPickerCompositionExample() {
    const theme = useTheme();
    const [value, setValue] = useState(theme.colors.primary.value);

    return (
      <StoryExample
        title="Compose your own picker"
        description="Root owns selection. Reorder or omit parts, supply labels and action content, and arrange the layout with View."
      >
        <ColorPicker.Root
          value={value}
          onChange={setValue}
          commitMode="confirm"
        >
          <Typography.Title4>Brand color</Typography.Title4>
          <ColorPicker.Spectrum />
          <ColorPicker.HueSlider />
          <View flexDirection="row" alignItems="flex-end" gap={theme.space.sm}>
            <ColorPicker.Preview />
            <View flex={1}>
              <ColorPicker.HexInput label="Custom hex" />
            </View>
          </View>
          <View flexDirection="row" gap={theme.space.xs}>
            <ColorPicker.Swatch color={theme.colors.primary.value}>
              <Typography.Caption>1</Typography.Caption>
            </ColorPicker.Swatch>
            <ColorPicker.Swatch color={theme.colors.feedback.info.value}>
              <Typography.Caption>2</Typography.Caption>
            </ColorPicker.Swatch>
          </View>
          <View flexDirection="row" gap={theme.space.xs}>
            <View flex={1}>
              <ColorPicker.Cancel>Discard</ColorPicker.Cancel>
            </View>
            <View flex={1}>
              <ColorPicker.Apply>Use color</ColorPicker.Apply>
            </View>
          </View>
        </ColorPicker.Root>
        <Typography.Code>Committed: {value}</Typography.Code>
      </StoryExample>
    );
  },
);
