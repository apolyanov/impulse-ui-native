import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";
import { useSpace } from "@impulse-ui-native/theme";

export const SkeletonCardPreview = memo(function SkeletonCardPreview() {
  const space = useSpace();

  return (
    <Skeleton.Container gap={space.mxs}>
      <Skeleton.Bone width="100%" height={120} borderRadius={12} />
      <Skeleton.Text text="Loading card title" Component={Typography.Title5} />
      <Skeleton.Tag size="small" width={88} />
    </Skeleton.Container>
  );
});
