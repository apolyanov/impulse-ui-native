import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { AvatarExample, AvatarExampleDefinitions } from "./avatar.examples";

export function AvatarDocumentation() {
  return (
    <StoryDocumentationPage
      title="Avatar"
      description="Avatar represents a person or entity with an image layered over initials or custom fallback content. Shared filled, outlined, soft, ghost, and plain variants align it with the rest of the control system, while token-aware sizes and semantic presence states keep identity consistent across layouts. Avatar grouping is intentionally outside this component's scope."
    >
      {AvatarExampleDefinitions.map((example) => (
        <View key={example.name}>
          <AvatarExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
