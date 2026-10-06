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
      description="Import Progress from @impulse-ui-native/progress. Provide value for determinate progress or omit it for a Reanimated indeterminate animation. Values are clamped to the configured range."
    >
      {ProgressExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ProgressExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
