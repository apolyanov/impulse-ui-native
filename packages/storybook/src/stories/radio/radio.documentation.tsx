import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { RadioExample, RadioExampleDefinitions } from "./radio.examples";

export function RadioDocumentation() {
  return (
    <StoryDocumentationPage
      title="Radio"
      description="Radios represent a single selectable option and are designed to participate in a mutually exclusive group."
    >
      {RadioExampleDefinitions.map((example) => (
        <View key={example.name}>
          <RadioExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
