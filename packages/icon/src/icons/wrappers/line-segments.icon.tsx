import { createIcon } from "../../hocs/create-icon.hoc";
import { LineSegmentsBoldIcon } from "../bold/line-segments-bold.icon";
import { LineSegmentsDuotoneIcon } from "../duotone/line-segments-duotone.icon";
import { LineSegmentsFillIcon } from "../fill/line-segments-fill.icon";
import { LineSegmentsLightIcon } from "../light/line-segments-light.icon";
import { LineSegmentsRegularIcon } from "../regular/line-segments-regular.icon";
import { LineSegmentsThinIcon } from "../thin/line-segments-thin.icon";

export const LineSegmentsIcon = createIcon("LineSegments", {
  bold: LineSegmentsBoldIcon,
  duotone: LineSegmentsDuotoneIcon,
  fill: LineSegmentsFillIcon,
  light: LineSegmentsLightIcon,
  regular: LineSegmentsRegularIcon,
  thin: LineSegmentsThinIcon,
});
