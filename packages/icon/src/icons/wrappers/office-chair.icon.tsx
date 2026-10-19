import { createIcon } from "../../hocs/create-icon.hoc";
import { OfficeChairBoldIcon } from "../bold/office-chair-bold.icon";
import { OfficeChairDuotoneIcon } from "../duotone/office-chair-duotone.icon";
import { OfficeChairFillIcon } from "../fill/office-chair-fill.icon";
import { OfficeChairLightIcon } from "../light/office-chair-light.icon";
import { OfficeChairRegularIcon } from "../regular/office-chair-regular.icon";
import { OfficeChairThinIcon } from "../thin/office-chair-thin.icon";

export const OfficeChairIcon = createIcon("OfficeChair", {
  bold: OfficeChairBoldIcon,
  duotone: OfficeChairDuotoneIcon,
  fill: OfficeChairFillIcon,
  light: OfficeChairLightIcon,
  regular: OfficeChairRegularIcon,
  thin: OfficeChairThinIcon,
});
