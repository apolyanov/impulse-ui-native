import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  PressableExample,
  PressableExampleDefinitions,
} from "./pressable.examples";

export function PressableDocumentation() {
  return (
    <StoryDocumentationPage
      title="Pressable"
      description="Pressable is the low-level interaction primitive used to build custom touchable surfaces, controls, cards, rows, and buttons."
    >
      {PressableExampleDefinitions.map((example) => (
        <View key={example.name}>
          <PressableExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
