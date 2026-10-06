import { memo } from "react";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ToastExample, ToastExampleDefinitions } from "./toast.examples";

export const ToastDocumentation = memo(function ToastDocumentation() {
  return (
    <StoryDocumentationPage
      title="Toast"
      description="Compound native notifications with OverlayProvider integration, durations, and actions. Timers pause while the app is inactive. Switch the host theme to inspect light and dark tokens."
    >
      {ToastExampleDefinitions.map((example) => (
        <ToastExample key={example.name} example={example} elevated />
      ))}
    </StoryDocumentationPage>
  );
});
