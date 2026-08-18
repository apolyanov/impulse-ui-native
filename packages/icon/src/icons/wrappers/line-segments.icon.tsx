import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LineSegmentsBoldIcon } from "../bold/line-segments-bold.icon";
import { LineSegmentsDuotoneIcon } from "../duotone/line-segments-duotone.icon";
import { LineSegmentsFillIcon } from "../fill/line-segments-fill.icon";
import { LineSegmentsLightIcon } from "../light/line-segments-light.icon";
import { LineSegmentsRegularIcon } from "../regular/line-segments-regular.icon";
import { LineSegmentsThinIcon } from "../thin/line-segments-thin.icon";

export const LineSegmentsIcon = memo(function LineSegments(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineSegmentsBoldIcon,
      duotone: LineSegmentsDuotoneIcon,
      fill: LineSegmentsFillIcon,
      light: LineSegmentsLightIcon,
      regular: LineSegmentsRegularIcon,
      thin: LineSegmentsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
