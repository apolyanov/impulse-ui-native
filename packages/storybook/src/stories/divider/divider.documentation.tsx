import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { DividerExample, DividerExampleDefinitions } from "./divider.examples";

export function DividerDocumentation() {
  return (
    <StoryDocumentationPage
      title="Divider"
      description="Divider separates related regions without introducing layout structure. It supports horizontal and vertical orientation, logical insets, semantic theme tones, and an explicit color override."
    >
      {DividerExampleDefinitions.map((example) => (
        <View key={example.name}>
          <DividerExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
