import { memo } from "react";

import { Skeleton } from "@impulse-ui-native/skeleton";
import { useSpace } from "@impulse-ui-native/theme";

export const SkeletonNavigationAndFeedbackPreview = memo(
  function SkeletonNavigationAndFeedbackPreview() {
    const space = useSpace();

    return (
      <Skeleton.Container gap={space.sm}>
        <Skeleton.Progress />
        <Skeleton.Container
          flexDirection="row"
          alignItems="center"
          gap={space.mxs}
        >
          <Skeleton.Progress variant="circular" />
          <Skeleton.Slider width={200} />
        </Skeleton.Container>
        <Skeleton.SegmentedControl itemCount={3} />
        <Skeleton.Pagination itemCount={5} />
        <Skeleton.Divider />
      </Skeleton.Container>
    );
  },
);
