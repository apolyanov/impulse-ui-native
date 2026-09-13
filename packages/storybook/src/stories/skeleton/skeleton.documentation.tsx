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
      description="Skeleton provides animated, theme-aware placeholders that can mirror the shape of content while it loads."
    >
      {SkeletonExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SkeletonExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
