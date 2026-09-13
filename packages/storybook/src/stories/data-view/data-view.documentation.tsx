import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  DataViewExample,
  DataViewExampleDefinitions,
} from "./data-view.examples";

export function DataViewDocumentation() {
  return (
    <StoryDocumentationPage
      title="DataView"
      description="DataView coordinates loading, error, empty, and successful states for data-backed interfaces."
    >
      {DataViewExampleDefinitions.map((example) => (
        <View key={example.name}>
          <DataViewExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
