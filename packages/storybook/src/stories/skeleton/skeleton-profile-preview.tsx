import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";
import { useSpace } from "@impulse-ui-native/theme";

export const SkeletonProfilePreview = memo(function SkeletonProfilePreview() {
  const space = useSpace();

  return (
    <Skeleton.Container flexDirection="row" alignItems="center" gap={space.mxs}>
      <Skeleton.Avatar size="large" />
      <Skeleton.Container flex={1} gap={space.xs}>
        <Skeleton.Text text="Account holder name" Component={Typography.Body} />
        <Skeleton.Bone width="60%" height={12} borderRadius={6} />
      </Skeleton.Container>
    </Skeleton.Container>
  );
});
