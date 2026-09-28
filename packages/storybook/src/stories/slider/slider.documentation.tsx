import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { SliderExample, SliderExampleDefinitions } from "./slider.examples";

export function SliderDocumentation() {
  return (
    <StoryDocumentationPage
      title="Slider / Range Slider"
      description="Sliders select numeric values by track gesture, keyboard input, or assistive-technology adjustable actions. Both controls snap to step, expose formatted value text, and use the same tokenized size and variant system."
    >
      {SliderExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SliderExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
