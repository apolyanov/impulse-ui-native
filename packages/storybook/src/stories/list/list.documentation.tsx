import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ListExample } from "./list.examples";

export function ListDocumentation() {
  return (
    <StoryDocumentationPage
      title="List"
      description="Compose presentation rows with List.Root, Item, Leading, Content, and Trailing. Use List.Pressable for an optional row action. Add the existing Divider explicitly between rows. Applications own selection and trailing indicators; List has no value model or internal selection state."
    >
      <ListExample />
    </StoryDocumentationPage>
  );
}
