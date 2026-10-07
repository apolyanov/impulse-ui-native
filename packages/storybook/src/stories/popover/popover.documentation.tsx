import { memo } from "react";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { PopoverExample, PopoverExampleDefinitions } from "./popover.examples";

export const PopoverDocumentation = memo(function PopoverDocumentation() {
  return (
    <StoryDocumentationPage
      title="Tooltip / Popover"
      description="Portal-rendered native overlays with a shared positioning engine. Popover.Root owns state; Trigger measures its native anchor; Content carries context into the portal. Title, Description, and Close render supplied children. Switch the host theme to inspect light/dark surfaces. Outside taps are consumed without a scrim; Android Back dismisses. Left/right are physical placements. Providers must include SafeAreaProvider, ThemeProvider, and PortalProvider with a full-screen PortalsHost."
    >
      {PopoverExampleDefinitions.map((example) => (
        <PopoverExample key={example.name} example={example} />
      ))}
    </StoryDocumentationPage>
  );
});
