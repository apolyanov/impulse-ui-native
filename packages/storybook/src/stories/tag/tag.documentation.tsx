import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { TagExample, TagExampleDefinitions } from "./tag.examples";

export function TagDocumentation() {
  return (
    <StoryDocumentationPage
      title="Tag"
      description="Tags label categories, filters, metadata, and other compact text. They may be display-only, pressable, or closable. Use Badge instead for a dot-only status or bounded numeric count."
    >
      {TagExampleDefinitions.map((example) => (
        <View key={example.name}>
          <TagExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
