import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { FlyoutExample, FlyoutExampleDefinitions } from "./flyout.examples";

export function FlyoutDocumentation() {
  return (
    <StoryDocumentationPage
      title="Flyout"
      description="Flyout composes its Root, Header, Title, Content, and Handle parts. Root owns the gesture-enabled sheet, overlay, safe-area padding, and lifecycle callbacks. Compose its parts directly for custom presentation; keep an external Portal mounted around the sheet."
    >
      {FlyoutExampleDefinitions.map((example) => (
        <View key={example.name}>
          <FlyoutExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
