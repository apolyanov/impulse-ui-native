import { createIcon } from "../../hocs/create-icon.hoc";
import { MartiniBoldIcon } from "../bold/martini-bold.icon";
import { MartiniDuotoneIcon } from "../duotone/martini-duotone.icon";
import { MartiniFillIcon } from "../fill/martini-fill.icon";
import { MartiniLightIcon } from "../light/martini-light.icon";
import { MartiniRegularIcon } from "../regular/martini-regular.icon";
import { MartiniThinIcon } from "../thin/martini-thin.icon";

export const MartiniIcon = createIcon("Martini", {
  bold: MartiniBoldIcon,
  duotone: MartiniDuotoneIcon,
  fill: MartiniFillIcon,
  light: MartiniLightIcon,
  regular: MartiniRegularIcon,
  thin: MartiniThinIcon,
});
