import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { FlyoutExample, FlyoutExampleDefinitions } from "./flyout.examples";

export function FlyoutDocumentation() {
  return (
    <StoryDocumentationPage
      title="Flyout"
      description="Flyout is a gesture-enabled sheet with top and bottom placement, an overlay, safe-area padding, and lifecycle callbacks."
    >
      {FlyoutExampleDefinitions.map((example) => (
        <View key={example.name}>
          <FlyoutExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
