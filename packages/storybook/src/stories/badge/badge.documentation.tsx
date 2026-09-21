import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { BadgeExample, BadgeExampleDefinitions } from "./badge.examples";

export function BadgeDocumentation() {
  return (
    <StoryDocumentationPage
      title="Badge"
      description="Badges are compact labels for states and metadata. They support semantic tones, control-style visual variants, and the same PrefixIcon, Prefix, SuffixIcon, Suffix, and addon press-handler pattern as Input. Use Tag when the whole label needs built-in press or dismiss behavior."
    >
      {BadgeExampleDefinitions.map((example) => (
        <View key={example.name}>
          <BadgeExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
