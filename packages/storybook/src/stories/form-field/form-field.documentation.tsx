import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  FormFieldExample,
  FormFieldExampleDefinitions,
} from "./form-field.examples";

export function FormFieldDocumentation() {
  return (
    <StoryDocumentationPage
      title="FormField"
      description="FormField composes shared labels, descriptions, required markers, validation feedback, and explicit accessibility wiring around custom controls."
    >
      {FormFieldExampleDefinitions.map((example) => (
        <View key={example.name}>
          <FormFieldExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
