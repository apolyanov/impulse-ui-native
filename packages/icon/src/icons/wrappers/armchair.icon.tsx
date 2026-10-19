import { createIcon } from "../../hocs/create-icon.hoc";
import { ArmchairBoldIcon } from "../bold/armchair-bold.icon";
import { ArmchairDuotoneIcon } from "../duotone/armchair-duotone.icon";
import { ArmchairFillIcon } from "../fill/armchair-fill.icon";
import { ArmchairLightIcon } from "../light/armchair-light.icon";
import { ArmchairRegularIcon } from "../regular/armchair-regular.icon";
import { ArmchairThinIcon } from "../thin/armchair-thin.icon";

export const ArmchairIcon = createIcon("Armchair", {
  bold: ArmchairBoldIcon,
  duotone: ArmchairDuotoneIcon,
  fill: ArmchairFillIcon,
  light: ArmchairLightIcon,
  regular: ArmchairRegularIcon,
  thin: ArmchairThinIcon,
});
