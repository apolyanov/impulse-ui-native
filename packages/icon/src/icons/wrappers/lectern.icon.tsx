import { createIcon } from "../../hocs/create-icon.hoc";
import { LecternBoldIcon } from "../bold/lectern-bold.icon";
import { LecternDuotoneIcon } from "../duotone/lectern-duotone.icon";
import { LecternFillIcon } from "../fill/lectern-fill.icon";
import { LecternLightIcon } from "../light/lectern-light.icon";
import { LecternRegularIcon } from "../regular/lectern-regular.icon";
import { LecternThinIcon } from "../thin/lectern-thin.icon";

export const LecternIcon = createIcon("Lectern", {
  bold: LecternBoldIcon,
  duotone: LecternDuotoneIcon,
  fill: LecternFillIcon,
  light: LecternLightIcon,
  regular: LecternRegularIcon,
  thin: LecternThinIcon,
});
