import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LineSegmentBold } from "../bold";
import { LineSegmentDuotone } from "../duotone";
import { LineSegmentFill } from "../fill";
import { LineSegmentLight } from "../light";
import { LineSegmentRegular } from "../regular";
import { LineSegmentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LineSegment = memo(function LineSegment(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineSegmentBold,
      duotone: LineSegmentDuotone,
      fill: LineSegmentFill,
      light: LineSegmentLight,
      regular: LineSegmentRegular,
      thin: LineSegmentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
