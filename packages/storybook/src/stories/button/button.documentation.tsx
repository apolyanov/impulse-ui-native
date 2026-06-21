import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ButtonExample, ButtonExampleDefinitions } from "./button.examples";

export function ButtonDocumentation() {
  return (
    <StoryDocumentationPage
      title="Button"
      description="Buttons let users trigger actions, submit forms, confirm choices, and move through flows."
    >
      {ButtonExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ButtonExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
