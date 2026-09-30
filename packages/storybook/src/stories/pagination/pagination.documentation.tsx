import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  PaginationExample,
  PaginationExampleDefinitions,
} from "./pagination.examples";

export function PaginationDocumentation() {
  return (
    <StoryDocumentationPage
      title="Pagination"
      description="Native page navigation with token-driven sizes, an adaptive page window, compact mobile rendering, bounded controlled or uncontrolled state, and overflow ellipses. Every action uses the shared primitives Pressable, so pressed feedback is inherited rather than modeled as Pagination state."
    >
      {PaginationExampleDefinitions.map((example) => (
        <View key={example.name}>
          <PaginationExample elevated example={example} />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
