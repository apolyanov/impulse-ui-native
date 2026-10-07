import { memo } from "react";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ToastExample, ToastExampleDefinitions } from "./toast.examples";

export const ToastDocumentation = memo(function ToastDocumentation() {
  return (
    <StoryDocumentationPage
      title="Toast"
      description="Compound native notifications with OverlayProvider integration, durations, and actions. Older toasts animate downward and shrink behind the newest at both placements, with five visual stack levels. Open multiple batches to inspect overflow. Timers pause while the app is inactive. Switch the host theme to inspect light and dark tokens."
    >
      {ToastExampleDefinitions.map((example) => (
        <ToastExample key={example.name} example={example} elevated />
      ))}
    </StoryDocumentationPage>
  );
});
