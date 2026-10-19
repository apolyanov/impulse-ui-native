import { createIcon } from "../../hocs/create-icon.hoc";
import { StairsBoldIcon } from "../bold/stairs-bold.icon";
import { StairsDuotoneIcon } from "../duotone/stairs-duotone.icon";
import { StairsFillIcon } from "../fill/stairs-fill.icon";
import { StairsLightIcon } from "../light/stairs-light.icon";
import { StairsRegularIcon } from "../regular/stairs-regular.icon";
import { StairsThinIcon } from "../thin/stairs-thin.icon";

export const StairsIcon = createIcon("Stairs", {
  bold: StairsBoldIcon,
  duotone: StairsDuotoneIcon,
  fill: StairsFillIcon,
  light: StairsLightIcon,
  regular: StairsRegularIcon,
  thin: StairsThinIcon,
});
