import { memo, useState } from "react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { useEventCallback } from "@impulse-ui-native/core";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import type { ColorPickerExampleProps } from "./types/color-picker-example.types";
import { StoryExample } from "../../components/story-example";

export const ColorPickerExampleBody = memo(function ColorPickerExampleBody({
  example,
  elevated,
}: ColorPickerExampleProps) {
  const theme = useTheme();
  const [value, setValue] = useState(
    example.args.defaultValue ?? theme.colors.primary.value,
  );
  const reset = useEventCallback(() =>
    setValue(theme.colors.feedback.info.value),
  );

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      elevated={elevated}
    >
      <View gap={theme.space.sm}>
        <ColorPicker
          {...example.args}
          value={example.controlled ? value : example.args.value}
          onChange={setValue}
        />
        <Typography.Code>Committed: {value}</Typography.Code>
        {example.controlled ? (
          <Button variant="outlined" onPress={reset}>
            Set color externally
          </Button>
        ) : null}
      </View>
    </StoryExample>
  );
});
