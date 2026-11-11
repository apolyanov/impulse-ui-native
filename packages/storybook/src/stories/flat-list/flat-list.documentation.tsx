import { Typography } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";

export function FlatListDocumentation() {
  return (
    <StoryDocumentationPage
      title="FlatList"
      description="Native FlatList with useFlatListInitialScroll, a small helper returning initialScrollIndex and getItemLayout."
    >
      <Typography.Body>
        Give the hook the actual fixed row height, or width for horizontal
        lists. Destructure scrollToInitialIndex and spread the remaining props
        onto FlatList. Native FlatList handles initial positioning.
      </Typography.Body>
      <Typography.Body>
        Call scrollToInitialIndex to reposition the existing list. For
        asynchronous data, mount after options are available. Native props,
        refs, and callbacks work directly.
      </Typography.Body>
    </StoryDocumentationPage>
  );
}
