import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LineSegmentBoldIcon } from "../bold/line-segment-bold.icon";
import { LineSegmentDuotoneIcon } from "../duotone/line-segment-duotone.icon";
import { LineSegmentFillIcon } from "../fill/line-segment-fill.icon";
import { LineSegmentLightIcon } from "../light/line-segment-light.icon";
import { LineSegmentRegularIcon } from "../regular/line-segment-regular.icon";
import { LineSegmentThinIcon } from "../thin/line-segment-thin.icon";

export const LineSegmentIcon = memo(function LineSegment(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineSegmentBoldIcon,
      duotone: LineSegmentDuotoneIcon,
      fill: LineSegmentFillIcon,
      light: LineSegmentLightIcon,
      regular: LineSegmentRegularIcon,
      thin: LineSegmentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
