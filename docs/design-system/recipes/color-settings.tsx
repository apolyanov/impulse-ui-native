import { useState } from "react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { Typography, View } from "@impulse-ui-native/primitives";

export function ColorSettingsRecipe() {
  const [color, setColor] = useState("#F55D6B");
  return (
    <View gap={16}>
      <Typography.Title4>Workspace color</Typography.Title4>
      <Typography.Body>Saved color: {color}</Typography.Body>
      <ColorPicker.Root
        value={color}
        onChange={setColor}
        commitMode="confirm"
        tone="primary"
      >
        <ColorPicker.Spectrum />
        <ColorPicker.HueSlider />
        <ColorPicker.AlphaSlider />
        <ColorPicker.HexInput />
        <ColorPicker.Preview />
        <View flexDirection="row" gap={8}>
          <ColorPicker.Cancel>Cancel</ColorPicker.Cancel>
          <ColorPicker.Apply>Apply</ColorPicker.Apply>
        </View>
      </ColorPicker.Root>
    </View>
  );
}
