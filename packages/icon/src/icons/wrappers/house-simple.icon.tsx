import { createIcon } from "../../hocs/create-icon.hoc";
import { HouseSimpleBoldIcon } from "../bold/house-simple-bold.icon";
import { HouseSimpleDuotoneIcon } from "../duotone/house-simple-duotone.icon";
import { HouseSimpleFillIcon } from "../fill/house-simple-fill.icon";
import { HouseSimpleLightIcon } from "../light/house-simple-light.icon";
import { HouseSimpleRegularIcon } from "../regular/house-simple-regular.icon";
import { HouseSimpleThinIcon } from "../thin/house-simple-thin.icon";

export const HouseSimpleIcon = createIcon("HouseSimple", {
  bold: HouseSimpleBoldIcon,
  duotone: HouseSimpleDuotoneIcon,
  fill: HouseSimpleFillIcon,
  light: HouseSimpleLightIcon,
  regular: HouseSimpleRegularIcon,
  thin: HouseSimpleThinIcon,
});
