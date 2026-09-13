import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { LayersExample, LayersExampleDefinitions } from "./layers.examples";

export function LayersDocumentation() {
  return (
    <StoryDocumentationPage
      title="Layers"
      description="The layer registry coordinates typed, app-wide flyouts through an imperative controller and one shared LayerCenter."
    >
      {LayersExampleDefinitions.map((example) => (
        <View key={example.name}>
          <LayersExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
