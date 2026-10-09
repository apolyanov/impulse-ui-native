import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ModalExample, ModalExampleDefinitions } from "./modal.examples";

export function ModalDocumentation() {
  return (
    <StoryDocumentationPage
      title="Modal presentation"
      description="Import Modal from @impulse-ui-native/modal. Root is the main surface; Header, Content, Footer, Title, and Description render supplied children. This first stage provides inline presentation only. State, portals, backdrops, and dismissal are deferred."
    >
      {ModalExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ModalExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
