import { memo } from "react";

import { Skeleton } from "@impulse-ui-native/skeleton";
import { useSpace } from "@impulse-ui-native/theme";

export const SkeletonFieldsPreview = memo(function SkeletonFieldsPreview() {
  const space = useSpace();

  return (
    <Skeleton.Container gap={space.mxs}>
      <Skeleton.Control size="small" />
      <Skeleton.Control size="medium" />
      <Skeleton.Control size="large" />
      <Skeleton.Textarea rows={4} />
    </Skeleton.Container>
  );
});
