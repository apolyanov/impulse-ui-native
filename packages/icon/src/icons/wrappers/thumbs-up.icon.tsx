import { createIcon } from "../../hocs/create-icon.hoc";
import { ThumbsUpBoldIcon } from "../bold/thumbs-up-bold.icon";
import { ThumbsUpDuotoneIcon } from "../duotone/thumbs-up-duotone.icon";
import { ThumbsUpFillIcon } from "../fill/thumbs-up-fill.icon";
import { ThumbsUpLightIcon } from "../light/thumbs-up-light.icon";
import { ThumbsUpRegularIcon } from "../regular/thumbs-up-regular.icon";
import { ThumbsUpThinIcon } from "../thin/thumbs-up-thin.icon";

export const ThumbsUpIcon = createIcon("ThumbsUp", {
  bold: ThumbsUpBoldIcon,
  duotone: ThumbsUpDuotoneIcon,
  fill: ThumbsUpFillIcon,
  light: ThumbsUpLightIcon,
  regular: ThumbsUpRegularIcon,
  thin: ThumbsUpThinIcon,
});
