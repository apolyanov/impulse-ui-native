import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBucketBold } from "../bold";
import { PaintBucketDuotone } from "../duotone";
import { PaintBucketFill } from "../fill";
import { PaintBucketLight } from "../light";
import { PaintBucketRegular } from "../regular";
import { PaintBucketThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBucket = memo(function PaintBucket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBucketBold,
      duotone: PaintBucketDuotone,
      fill: PaintBucketFill,
      light: PaintBucketLight,
      regular: PaintBucketRegular,
      thin: PaintBucketThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
