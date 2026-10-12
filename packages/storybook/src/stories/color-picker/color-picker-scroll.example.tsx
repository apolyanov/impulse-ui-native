import { memo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { ColorPicker } from "@impulse-ui-native/color-picker";
import { useEventCallback } from "@impulse-ui-native/core";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

export const ColorPickerScrollExample = memo(
  function ColorPickerScrollExample() {
    const [disabled, setDisabled] = useState(false);
    const styles = useThemedStyles(themedStyles);
    const toggleDisabled = useEventCallback(() =>
      setDisabled((value) => !value),
    );

    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.content}>
        <Typography.Master>
          Drag outside the spectrum to scroll. Drag inside it to select a color
          without scrolling, including when your finger leaves the panel.
        </Typography.Master>
        <Button onPress={toggleDisabled}>
          {disabled ? "Enable picker" : "Disable picker"}
        </Button>
        <View style={styles.spacer}>
          <Typography.Master>Scroll down to the spectrum.</Typography.Master>
        </View>
        <ColorPicker defaultValue="#F55D6B" disabled={disabled} />
        <View style={styles.spacer}>
          <Typography.Master>
            After release, dragging here should scroll again. With the picker
            disabled, dragging inside the spectrum should also scroll.
          </Typography.Master>
        </View>
      </ScrollView>
    );
  },
);

function themedStyles(theme: AppTheme) {
  const panelHeight = theme.components.colorPicker.sizes.medium.spectrumHeight;

  return StyleSheet.create({
    root: { height: panelHeight * 3 },
    content: { padding: theme.space.md, gap: theme.space.md },
    spacer: { height: panelHeight, justifyContent: "center" },
  });
}
