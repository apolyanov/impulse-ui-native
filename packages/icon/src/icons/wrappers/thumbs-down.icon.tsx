import { createIcon } from "../../hocs/create-icon.hoc";
import { ThumbsDownBoldIcon } from "../bold/thumbs-down-bold.icon";
import { ThumbsDownDuotoneIcon } from "../duotone/thumbs-down-duotone.icon";
import { ThumbsDownFillIcon } from "../fill/thumbs-down-fill.icon";
import { ThumbsDownLightIcon } from "../light/thumbs-down-light.icon";
import { ThumbsDownRegularIcon } from "../regular/thumbs-down-regular.icon";
import { ThumbsDownThinIcon } from "../thin/thumbs-down-thin.icon";

export const ThumbsDownIcon = createIcon("ThumbsDown", {
  bold: ThumbsDownBoldIcon,
  duotone: ThumbsDownDuotoneIcon,
  fill: ThumbsDownFillIcon,
  light: ThumbsDownLightIcon,
  regular: ThumbsDownRegularIcon,
  thin: ThumbsDownThinIcon,
});
