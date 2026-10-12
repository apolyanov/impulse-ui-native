import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { SliderExample, SliderExampleDefinitions } from "./slider.examples";

export function SliderDocumentation() {
  return (
    <StoryDocumentationPage
      title="Slider / Range Slider"
      description="Native gestures move slider thumbs and fill continuously on the UI thread, independently of the step grid. Value callbacks emit changed steps, and completion receives the final selection. Both controls snap to step, expose formatted value text, and use the same tokenized size and variant system."
    >
      {SliderExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SliderExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
