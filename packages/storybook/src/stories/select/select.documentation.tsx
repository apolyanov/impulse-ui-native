import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { SelectExample, SelectExampleDefinitions } from "./select.examples";

export function SelectDocumentation() {
  return (
    <StoryDocumentationPage
      title="Select"
      description="Select and MultiSelect use the shared control system and present options in an app-wide flyout."
    >
      {SelectExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SelectExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
