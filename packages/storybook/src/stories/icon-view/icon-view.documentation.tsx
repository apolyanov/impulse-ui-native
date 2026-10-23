import { memo } from "react";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { IconViewExamples } from "./icon-view.examples";

export const IconViewDocumentation = memo(function IconViewDocumentation() {
  return (
    <StoryDocumentationPage
      title="IconView"
      description="A non-pressable icon surface with IconButton sizes and Badge variants and tones. Pass an icon component through icon. Use iconProps.variant for the icon weight, and primitives View props for container layout and spacing. The surface follows parent alignment. Use IconButton for actions."
    >
      <IconViewExamples />
    </StoryDocumentationPage>
  );
});
