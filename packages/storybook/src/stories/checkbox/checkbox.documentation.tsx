import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  CheckboxExample,
  CheckboxExampleDefinitions,
} from "./checkbox.examples";

export function CheckboxDocumentation() {
  return (
    <StoryDocumentationPage
      title="Checkbox"
      description="Checkboxes let users toggle independent choices and represent checked, unchecked, or mixed selections."
    >
      {CheckboxExampleDefinitions.map((example) => (
        <View key={example.name}>
          <CheckboxExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
