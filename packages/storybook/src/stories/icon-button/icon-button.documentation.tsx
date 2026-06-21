import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  IconButtonExample,
  IconButtonExampleDefinitions,
} from "./icon-button.examples";

export function IconButtonDocumentation() {
  return (
    <StoryDocumentationPage
      title="IconButton"
      description="Icon buttons let users trigger compact actions with a single icon when space is limited or the action is visually familiar."
    >
      {IconButtonExampleDefinitions.map((example) => (
        <View key={example.name}>
          <IconButtonExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
