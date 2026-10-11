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
        lists. Spread its result onto FlatList. Native FlatList handles initial
        positioning.
      </Typography.Body>
      <Typography.Body>
        Remount to apply a fresh initial index. For asynchronous data, mount
        after options are available. Native props, refs, and callbacks work
        directly.
      </Typography.Body>
    </StoryDocumentationPage>
  );
}
