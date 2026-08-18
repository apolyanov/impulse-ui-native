import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaintBucketBoldIcon } from "../bold/paint-bucket-bold.icon";
import { PaintBucketDuotoneIcon } from "../duotone/paint-bucket-duotone.icon";
import { PaintBucketFillIcon } from "../fill/paint-bucket-fill.icon";
import { PaintBucketLightIcon } from "../light/paint-bucket-light.icon";
import { PaintBucketRegularIcon } from "../regular/paint-bucket-regular.icon";
import { PaintBucketThinIcon } from "../thin/paint-bucket-thin.icon";

export const PaintBucketIcon = memo(function PaintBucket(
  props: IconWrapperProps,
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
