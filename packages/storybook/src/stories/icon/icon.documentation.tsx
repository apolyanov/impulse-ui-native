import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { IconExample, IconExampleDefinitions } from "./icon.examples";

export function IconDocumentation() {
  return (
    <StoryDocumentationPage
      title="Icon"
      description="The icon package provides a shared renderer and tree-shakeable named SVG wrappers in six visual weights."
    >
      {IconExampleDefinitions.map((example) => (
        <View key={example.name}>
          <IconExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
