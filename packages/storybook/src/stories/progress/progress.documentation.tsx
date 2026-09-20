import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  ProgressExample,
  ProgressExampleDefinitions,
} from "./progress.examples";

export function ProgressDocumentation() {
  return (
    <StoryDocumentationPage
      title="Progress"
      description="Progress communicates the completion of an operation. Provide value for determinate progress or omit it for a reduced-motion-aware indeterminate animation. Values are clamped to the configured range and exposed to assistive technologies."
    >
      {ProgressExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ProgressExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
