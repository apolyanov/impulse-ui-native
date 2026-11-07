import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { FlyoutExample, FlyoutExampleDefinitions } from "./flyout.examples";

export function FlyoutDocumentation() {
  return (
    <StoryDocumentationPage
      title="Flyout"
      description="Flyout supplies the header and handle and renders body children directly. Choose Content for static padding, ScrollView or FlatList for scrolling with downward drag dismissal when a bottom-sheet swipe starts at the top, or KeyboardAwareView for body-only keyboard avoidance. KeyboardAwareView needs KeyboardProvider above the app and Portal hosts; it renders one View and accepts your own scroll container. Root owns the gesture-enabled sheet, overlay, safe-area padding, and lifecycle callbacks. Compose its parts directly for custom presentation; keep an external Portal mounted around the sheet."
    >
      {FlyoutExampleDefinitions.map((example) => (
        <View key={example.name}>
          <FlyoutExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
