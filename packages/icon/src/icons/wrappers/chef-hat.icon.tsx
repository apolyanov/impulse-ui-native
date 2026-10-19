import { createIcon } from "../../hocs/create-icon.hoc";
import { ChefHatBoldIcon } from "../bold/chef-hat-bold.icon";
import { ChefHatDuotoneIcon } from "../duotone/chef-hat-duotone.icon";
import { ChefHatFillIcon } from "../fill/chef-hat-fill.icon";
import { ChefHatLightIcon } from "../light/chef-hat-light.icon";
import { ChefHatRegularIcon } from "../regular/chef-hat-regular.icon";
import { ChefHatThinIcon } from "../thin/chef-hat-thin.icon";

export const ChefHatIcon = createIcon("ChefHat", {
  bold: ChefHatBoldIcon,
  duotone: ChefHatDuotoneIcon,
  fill: ChefHatFillIcon,
  light: ChefHatLightIcon,
  regular: ChefHatRegularIcon,
  thin: ChefHatThinIcon,
});
