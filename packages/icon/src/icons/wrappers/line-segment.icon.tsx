import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LineSegmentBoldIcon } from "../bold";
import { LineSegmentDuotoneIcon } from "../duotone";
import { LineSegmentFillIcon } from "../fill";
import { LineSegmentLightIcon } from "../light";
import { LineSegmentRegularIcon } from "../regular";
import { LineSegmentThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LineSegmentIcon = memo(function LineSegment(
  props: IconWrapperProps
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
