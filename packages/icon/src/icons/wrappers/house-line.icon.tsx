import { createIcon } from "../../hocs/create-icon.hoc";
import { HouseLineBoldIcon } from "../bold/house-line-bold.icon";
import { HouseLineDuotoneIcon } from "../duotone/house-line-duotone.icon";
import { HouseLineFillIcon } from "../fill/house-line-fill.icon";
import { HouseLineLightIcon } from "../light/house-line-light.icon";
import { HouseLineRegularIcon } from "../regular/house-line-regular.icon";
import { HouseLineThinIcon } from "../thin/house-line-thin.icon";

export const HouseLineIcon = createIcon("HouseLine", {
  bold: HouseLineBoldIcon,
  duotone: HouseLineDuotoneIcon,
  fill: HouseLineFillIcon,
  light: HouseLineLightIcon,
  regular: HouseLineRegularIcon,
  thin: HouseLineThinIcon,
});
