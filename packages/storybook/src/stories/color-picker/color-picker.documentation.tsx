import { memo } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ColorPickerCompositionExample } from "./color-picker-composition.example";
import { ColorPickerExample } from "./color-picker.examples";
import { ColorPickerExampleDefinitions } from "./constants/color-picker.constants";

export const ColorPickerDocumentation = memo(
  function ColorPickerDocumentation() {
    return (
      <StoryDocumentationPage
        title="ColorPicker"
        description="A native full-spectrum color picker built with theme tokens, Slider, Input, Button, and SVG gradients."
      >
        <Typography.Master>
          Values accept short or long hex colors, optionally including alpha.
          Changes emit uppercase #RRGGBB for opaque colors and #RRGGBBAA for
          transparency. Immediate mode emits on each valid edit; confirm mode
          emits only on Apply. Invalid text never replaces the last valid
          selection.
        </Typography.Master>
        {ColorPickerExampleDefinitions.map((example) => (
          <View key={example.name}>
            <ColorPickerExample example={example} elevated />
          </View>
        ))}
        <ColorPickerCompositionExample />
      </StoryDocumentationPage>
    );
  },
);
