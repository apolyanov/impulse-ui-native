import { memo } from "react";

import { Skeleton } from "@impulse-ui-native/skeleton";
import { useSpace } from "@impulse-ui-native/theme";

export const SkeletonActionsAndChoicesPreview = memo(
  function SkeletonActionsAndChoicesPreview() {
    const space = useSpace();

    return (
      <Skeleton.Container gap={space.mxs}>
        <Skeleton.Container
          flexDirection="row"
          alignItems="center"
          gap={space.xs}
        >
          <Skeleton.Avatar />
          <Skeleton.Badge width={72} />
          <Skeleton.Tag size="medium" width={80} />
        </Skeleton.Container>
        <Skeleton.Container
          flexDirection="row"
          alignItems="center"
          gap={space.xs}
        >
          <Skeleton.Button width={112} />
          <Skeleton.IconButton />
          <Skeleton.Checkbox />
          <Skeleton.Radio />
          <Skeleton.Switch />
        </Skeleton.Container>
      </Skeleton.Container>
    );
  },
);
