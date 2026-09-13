import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { StepperExample, StepperExampleDefinitions } from "./stepper.examples";

export function StepperDocumentation() {
  return (
    <StoryDocumentationPage
      title="Stepper"
      description="Stepper coordinates a controlled multi-step flow with contextual, imperative, and tab-based navigation."
    >
      {StepperExampleDefinitions.map((example) => (
        <View key={example.name}>
          <StepperExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
