import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LineSegmentsBold } from "../bold";
import { LineSegmentsDuotone } from "../duotone";
import { LineSegmentsFill } from "../fill";
import { LineSegmentsLight } from "../light";
import { LineSegmentsRegular } from "../regular";
import { LineSegmentsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LineSegments = memo(function LineSegments(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineSegmentsBold,
      duotone: LineSegmentsDuotone,
      fill: LineSegmentsFill,
      light: LineSegmentsLight,
      regular: LineSegmentsRegular,
      thin: LineSegmentsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
