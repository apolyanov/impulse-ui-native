import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { InputExample, InputExampleDefinitions } from "./input.examples";

export function InputDocumentation() {
  return (
    <StoryDocumentationPage
      title="Input"
      description="Input combines the native text field with shared labels, validation, addons, sizes, variants, and secure-entry behavior."
    >
      {InputExampleDefinitions.map((example) => (
        <View key={example.name}>
          <InputExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
