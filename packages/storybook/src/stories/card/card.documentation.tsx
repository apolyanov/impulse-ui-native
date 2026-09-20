import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { CardExample, CardExampleDefinitions } from "./card.examples";

export function CardDocumentation() {
  return (
    <StoryDocumentationPage
      title="Card"
      description="Card is a compound surface for grouping related content. Root, Header, Content, Footer, and Media provide styling defaults while retaining normal View composition; Pressable is reserved for cards with one clear surface-level action."
    >
      {CardExampleDefinitions.map((example) => (
        <View key={example.name}>
          <CardExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
