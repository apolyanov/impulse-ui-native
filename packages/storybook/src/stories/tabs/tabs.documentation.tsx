import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { TabsExample, TabsExampleDefinitions } from "./tabs.examples";

export function TabsDocumentation() {
  return (
    <StoryDocumentationPage
      title="Tabs"
      description="Native section navigation with a flat items API, a scrollable underline tab row, and controlled or uncontrolled selection. Only the active panel is mounted; switching tabs discards its local state. There is no prerendering, lazy loading, or panel cache."
    >
      {TabsExampleDefinitions.map((example) => (
        <TabsExample key={example.name} elevated example={example} />
      ))}
    </StoryDocumentationPage>
  );
}
