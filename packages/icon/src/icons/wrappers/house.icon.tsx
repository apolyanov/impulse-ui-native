import { createIcon } from "../../hocs/create-icon.hoc";
import { HouseBoldIcon } from "../bold/house-bold.icon";
import { HouseDuotoneIcon } from "../duotone/house-duotone.icon";
import { HouseFillIcon } from "../fill/house-fill.icon";
import { HouseLightIcon } from "../light/house-light.icon";
import { HouseRegularIcon } from "../regular/house-regular.icon";
import { HouseThinIcon } from "../thin/house-thin.icon";

export const HouseIcon = createIcon("House", {
  bold: HouseBoldIcon,
  duotone: HouseDuotoneIcon,
  fill: HouseFillIcon,
  light: HouseLightIcon,
  regular: HouseRegularIcon,
  thin: HouseThinIcon,
});
