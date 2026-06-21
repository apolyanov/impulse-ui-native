import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ViewExample, ViewExampleDefinitions } from "./view.examples";

export function ViewDocumentation() {
  return (
    <StoryDocumentationPage
      title="View"
      description="View is the base layout primitive for grouping content, applying style props, building surfaces, and composing native interface structures."
    >
      {ViewExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ViewExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
