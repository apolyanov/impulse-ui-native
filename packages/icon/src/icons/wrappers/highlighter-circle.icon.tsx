import { createIcon } from "../../hocs/create-icon.hoc";
import { HighlighterCircleBoldIcon } from "../bold/highlighter-circle-bold.icon";
import { HighlighterCircleDuotoneIcon } from "../duotone/highlighter-circle-duotone.icon";
import { HighlighterCircleFillIcon } from "../fill/highlighter-circle-fill.icon";
import { HighlighterCircleLightIcon } from "../light/highlighter-circle-light.icon";
import { HighlighterCircleRegularIcon } from "../regular/highlighter-circle-regular.icon";
import { HighlighterCircleThinIcon } from "../thin/highlighter-circle-thin.icon";

export const HighlighterCircleIcon = createIcon("HighlighterCircle", {
  bold: HighlighterCircleBoldIcon,
  duotone: HighlighterCircleDuotoneIcon,
  fill: HighlighterCircleFillIcon,
  light: HighlighterCircleLightIcon,
  regular: HighlighterCircleRegularIcon,
  thin: HighlighterCircleThinIcon,
});
