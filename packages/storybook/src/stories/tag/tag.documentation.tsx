import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { TagExample, TagExampleDefinitions } from "./tag.examples";

export function TagDocumentation() {
  return (
    <StoryDocumentationPage
      title="Tag"
      description="Tags help users identify statuses, categories, filters, metadata, and compact contextual information."
    >
      {TagExampleDefinitions.map((example) => (
        <View key={example.name}>
          <TagExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
