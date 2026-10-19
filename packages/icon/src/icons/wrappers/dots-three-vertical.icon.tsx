import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsThreeVerticalBoldIcon } from "../bold/dots-three-vertical-bold.icon";
import { DotsThreeVerticalDuotoneIcon } from "../duotone/dots-three-vertical-duotone.icon";
import { DotsThreeVerticalFillIcon } from "../fill/dots-three-vertical-fill.icon";
import { DotsThreeVerticalLightIcon } from "../light/dots-three-vertical-light.icon";
import { DotsThreeVerticalRegularIcon } from "../regular/dots-three-vertical-regular.icon";
import { DotsThreeVerticalThinIcon } from "../thin/dots-three-vertical-thin.icon";

export const DotsThreeVerticalIcon = createIcon("DotsThreeVertical", {
  bold: DotsThreeVerticalBoldIcon,
  duotone: DotsThreeVerticalDuotoneIcon,
  fill: DotsThreeVerticalFillIcon,
  light: DotsThreeVerticalLightIcon,
  regular: DotsThreeVerticalRegularIcon,
  thin: DotsThreeVerticalThinIcon,
});
