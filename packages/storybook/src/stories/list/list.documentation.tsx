import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ListReadyMadeExample } from "./list-ready-made-example";
import { ListExample } from "./list.examples";

export function ListDocumentation() {
  return (
    <StoryDocumentationPage
      title="List"
      description="Import List from @impulse-ui-native/list. Use List with an items array for ready-made rows, or compose child-only List.Root, Item, Leading, Content, and Trailing parts. Use List.Pressable for an optional row action and add Divider explicitly between rows. Applications own selection and trailing indicators."
    >
      <ListReadyMadeExample />
      <ListExample />
    </StoryDocumentationPage>
  );
}
