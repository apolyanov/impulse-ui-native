import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  TextareaExample,
  TextareaExampleDefinitions,
} from "./textarea.examples";

export function TextareaDocumentation() {
  return (
    <StoryDocumentationPage
      title="Textarea"
      description="Textarea provides themed multiline text entry with controlled and uncontrolled values, validation feedback, character counting, and bounded auto-grow behavior."
    >
      {TextareaExampleDefinitions.map((example) => (
        <View key={example.name}>
          <TextareaExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
