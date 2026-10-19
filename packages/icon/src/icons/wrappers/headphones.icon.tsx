import { createIcon } from "../../hocs/create-icon.hoc";
import { HeadphonesBoldIcon } from "../bold/headphones-bold.icon";
import { HeadphonesDuotoneIcon } from "../duotone/headphones-duotone.icon";
import { HeadphonesFillIcon } from "../fill/headphones-fill.icon";
import { HeadphonesLightIcon } from "../light/headphones-light.icon";
import { HeadphonesRegularIcon } from "../regular/headphones-regular.icon";
import { HeadphonesThinIcon } from "../thin/headphones-thin.icon";

export const HeadphonesIcon = createIcon("Headphones", {
  bold: HeadphonesBoldIcon,
  duotone: HeadphonesDuotoneIcon,
  fill: HeadphonesFillIcon,
  light: HeadphonesLightIcon,
  regular: HeadphonesRegularIcon,
  thin: HeadphonesThinIcon,
});
