import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { OverlayExample, OverlayExampleDefinitions } from "./overlay.examples";

export function OverlayDocumentation() {
  return (
    <StoryDocumentationPage
      title="Overlay"
      description="The overlay store coordinates typed, app-wide flyouts through imperative controllers and one shared OverlayHost."
    >
      {OverlayExampleDefinitions.map((example) => (
        <View key={example.name}>
          <OverlayExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
