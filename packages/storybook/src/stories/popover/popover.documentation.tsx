import { memo } from "react";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { PopoverExample, PopoverExampleDefinitions } from "./popover.examples";

export const PopoverDocumentation = memo(function PopoverDocumentation() {
  return (
    <StoryDocumentationPage
      title="Tooltip / Popover"
      description="Portal-rendered native overlays with a shared positioning engine. Popover.Root owns state; Trigger measures its native anchor; Content carries context into the portal. Header, Footer, Title, Description, and Close render supplied children. The convenience API composes a title or custom header, neutral X close button with hideClose, body children, and optional footer. Popover uses a flat surface without a default shadow. Tooltip owns its compact inverse styling. Switch the host theme to inspect light/dark colors. Outside taps are consumed without a scrim; Android Back dismisses. Left/right are physical placements. Providers must include SafeAreaProvider, ThemeProvider, and PortalProvider with a full-screen PortalsHost."
    >
      {PopoverExampleDefinitions.map((example) => (
        <PopoverExample key={example.name} example={example} />
      ))}
    </StoryDocumentationPage>
  );
});
