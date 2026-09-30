import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  SkeletonExample,
  SkeletonExampleDefinitions,
} from "./skeleton.examples";

export function SkeletonDocumentation() {
  return (
    <StoryDocumentationPage
      title="Skeleton"
      description="Skeleton provides animated, theme-aware primitives and token-matched component presets that preserve content geometry while data loads. Composite surfaces remain recipes so they can follow each application's layout."
    >
      {SkeletonExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SkeletonExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
