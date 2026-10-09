import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ModalExample, ModalExampleDefinitions } from "./modal.examples";

export function ModalDocumentation() {
  return (
    <StoryDocumentationPage
      title="Modal"
      description="Modal supports controlled local usage inside an always-mounted Portal and global registration through OverlayHost. Root owns the backdrop, safe-area positioning, Android back dismissal, and lifecycle animations. Header, Content, Footer, Title, and Description remain independent visual parts; Content does not scroll."
    >
      {ModalExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ModalExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
