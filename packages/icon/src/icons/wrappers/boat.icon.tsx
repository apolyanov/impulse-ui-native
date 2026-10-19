import { createIcon } from "../../hocs/create-icon.hoc";
import { BoatBoldIcon } from "../bold/boat-bold.icon";
import { BoatDuotoneIcon } from "../duotone/boat-duotone.icon";
import { BoatFillIcon } from "../fill/boat-fill.icon";
import { BoatLightIcon } from "../light/boat-light.icon";
import { BoatRegularIcon } from "../regular/boat-regular.icon";
import { BoatThinIcon } from "../thin/boat-thin.icon";

export const BoatIcon = createIcon("Boat", {
  bold: BoatBoldIcon,
  duotone: BoatDuotoneIcon,
  fill: BoatFillIcon,
  light: BoatLightIcon,
  regular: BoatRegularIcon,
  thin: BoatThinIcon,
});
