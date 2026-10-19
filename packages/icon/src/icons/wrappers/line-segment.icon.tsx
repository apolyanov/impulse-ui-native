import { createIcon } from "../../hocs/create-icon.hoc";
import { LineSegmentBoldIcon } from "../bold/line-segment-bold.icon";
import { LineSegmentDuotoneIcon } from "../duotone/line-segment-duotone.icon";
import { LineSegmentFillIcon } from "../fill/line-segment-fill.icon";
import { LineSegmentLightIcon } from "../light/line-segment-light.icon";
import { LineSegmentRegularIcon } from "../regular/line-segment-regular.icon";
import { LineSegmentThinIcon } from "../thin/line-segment-thin.icon";

export const LineSegmentIcon = createIcon("LineSegment", {
  bold: LineSegmentBoldIcon,
  duotone: LineSegmentDuotoneIcon,
  fill: LineSegmentFillIcon,
  light: LineSegmentLightIcon,
  regular: LineSegmentRegularIcon,
  thin: LineSegmentThinIcon,
});
