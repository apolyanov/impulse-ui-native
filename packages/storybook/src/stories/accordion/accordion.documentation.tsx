import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  AccordionExample,
  AccordionExampleDefinitions,
} from "./accordion.examples";

export function AccordionDocumentation() {
  return (
    <StoryDocumentationPage
      description="Accordion organizes related disclosure sections without imposing screen layout. Root coordinates controlled or uncontrolled single/multiple expansion, Trigger provides accessible keyboard interaction, and Content animates its measured height while remaining mounted for nested state."
      title="Accordion"
    >
      {AccordionExampleDefinitions.map((example) => (
        <View key={example.name}>
          <AccordionExample elevated example={example} />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
