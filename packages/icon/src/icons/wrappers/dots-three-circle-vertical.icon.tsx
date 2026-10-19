import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsThreeCircleVerticalBoldIcon } from "../bold/dots-three-circle-vertical-bold.icon";
import { DotsThreeCircleVerticalDuotoneIcon } from "../duotone/dots-three-circle-vertical-duotone.icon";
import { DotsThreeCircleVerticalFillIcon } from "../fill/dots-three-circle-vertical-fill.icon";
import { DotsThreeCircleVerticalLightIcon } from "../light/dots-three-circle-vertical-light.icon";
import { DotsThreeCircleVerticalRegularIcon } from "../regular/dots-three-circle-vertical-regular.icon";
import { DotsThreeCircleVerticalThinIcon } from "../thin/dots-three-circle-vertical-thin.icon";

export const DotsThreeCircleVerticalIcon = createIcon(
  "DotsThreeCircleVertical",
  {
    bold: DotsThreeCircleVerticalBoldIcon,
    duotone: DotsThreeCircleVerticalDuotoneIcon,
    fill: DotsThreeCircleVerticalFillIcon,
    light: DotsThreeCircleVerticalLightIcon,
    regular: DotsThreeCircleVerticalRegularIcon,
    thin: DotsThreeCircleVerticalThinIcon,
  },
);
