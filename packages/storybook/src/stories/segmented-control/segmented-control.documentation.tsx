import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  SegmentedControlExample,
  SegmentedControlExampleDefinitions,
} from "./segmented-control.examples";

export function SegmentedControlDocumentation() {
  return (
    <StoryDocumentationPage
      title="Segmented Control"
      description="A token-driven compound control for choosing one value from a small, closely related set. Root coordinates state and overflow while Item owns each option's content and disabled state."
    >
      {SegmentedControlExampleDefinitions.map((example) => (
        <View key={example.name}>
          <SegmentedControlExample elevated example={example} />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
