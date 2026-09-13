import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { PortalExample, PortalExampleDefinitions } from "./portal.examples";

export function PortalDocumentation() {
  return (
    <StoryDocumentationPage
      title="Portal"
      description="Portal moves React content into default or named destinations backed by a stable external store."
    >
      {PortalExampleDefinitions.map((example) => (
        <View key={example.name}>
          <PortalExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
