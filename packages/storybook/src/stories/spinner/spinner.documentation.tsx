import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { SpinnerExample, SpinnerExampleDefinitions } from "./spinner.examples";

export function SpinnerDocumentation() {
  return (
    <StoryDocumentationPage
      title="Spinner"
      description="Spinner communicates that an indeterminate operation is in progress. Its sizes and semantic tones come from the active theme, while an explicit color can adapt it to contextual surfaces."
    >
      {SpinnerExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SpinnerExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
