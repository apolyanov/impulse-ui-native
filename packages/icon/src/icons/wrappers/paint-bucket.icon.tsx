import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBucketBoldIcon } from "../bold";
import { PaintBucketDuotoneIcon } from "../duotone";
import { PaintBucketFillIcon } from "../fill";
import { PaintBucketLightIcon } from "../light";
import { PaintBucketRegularIcon } from "../regular";
import { PaintBucketThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBucketIcon = memo(function PaintBucket(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBucketBoldIcon,
      duotone: PaintBucketDuotoneIcon,
      fill: PaintBucketFillIcon,
      light: PaintBucketLightIcon,
      regular: PaintBucketRegularIcon,
      thin: PaintBucketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
