import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { SwitchExample, SwitchExampleDefinitions } from "./switch.examples";

export function SwitchDocumentation() {
  return (
    <StoryDocumentationPage
      title="Switch"
      description="Switches toggle settings that take effect immediately. Their thumb position and colors animate unless the system requests reduced motion."
    >
      {SwitchExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SwitchExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
