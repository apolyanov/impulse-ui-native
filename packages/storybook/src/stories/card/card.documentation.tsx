import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { CardExample, CardExampleDefinitions } from "./card.examples";

export function CardDocumentation() {
  return (
    <StoryDocumentationPage
      title="Card"
      description="Import Card from @impulse-ui-native/card. Card assembles header, media, footer, and children props from its namespaced parts. For custom layouts, Root, Header, Content, Footer, and Media render supplied children; Pressable is reserved for cards with one clear surface-level action."
    >
      {CardExampleDefinitions.map((example) => (
        <View key={example.name}>
          <CardExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
