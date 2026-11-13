import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { InputFocusExample } from "./input-focus-example";
import { InputExample, InputExampleDefinitions } from "./input.examples";

export function InputDocumentation() {
  return (
    <StoryDocumentationPage
      title="Input"
      description="Input combines the native text field with shared labels, validation, addons, sizes, variants, and secure-entry behavior. Its ref exposes the native TextInput; pass Controller's field.ref for React Hook Form error focus and use onChangeText for field.onChange."
    >
      {InputExampleDefinitions.map((example) => (
        <View key={example.name}>
          <InputExample example={example} elevated />
        </View>
      ))}
      <InputFocusExample />
    </StoryDocumentationPage>
  );
}
