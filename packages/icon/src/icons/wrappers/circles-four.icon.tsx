import { createIcon } from "../../hocs/create-icon.hoc";
import { CirclesFourBoldIcon } from "../bold/circles-four-bold.icon";
import { CirclesFourDuotoneIcon } from "../duotone/circles-four-duotone.icon";
import { CirclesFourFillIcon } from "../fill/circles-four-fill.icon";
import { CirclesFourLightIcon } from "../light/circles-four-light.icon";
import { CirclesFourRegularIcon } from "../regular/circles-four-regular.icon";
import { CirclesFourThinIcon } from "../thin/circles-four-thin.icon";

export const CirclesFourIcon = createIcon("CirclesFour", {
  bold: CirclesFourBoldIcon,
  duotone: CirclesFourDuotoneIcon,
  fill: CirclesFourFillIcon,
  light: CirclesFourLightIcon,
  regular: CirclesFourRegularIcon,
  thin: CirclesFourThinIcon,
});
