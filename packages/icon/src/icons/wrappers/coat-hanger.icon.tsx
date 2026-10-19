import { createIcon } from "../../hocs/create-icon.hoc";
import { CoatHangerBoldIcon } from "../bold/coat-hanger-bold.icon";
import { CoatHangerDuotoneIcon } from "../duotone/coat-hanger-duotone.icon";
import { CoatHangerFillIcon } from "../fill/coat-hanger-fill.icon";
import { CoatHangerLightIcon } from "../light/coat-hanger-light.icon";
import { CoatHangerRegularIcon } from "../regular/coat-hanger-regular.icon";
import { CoatHangerThinIcon } from "../thin/coat-hanger-thin.icon";

export const CoatHangerIcon = createIcon("CoatHanger", {
  bold: CoatHangerBoldIcon,
  duotone: CoatHangerDuotoneIcon,
  fill: CoatHangerFillIcon,
  light: CoatHangerLightIcon,
  regular: CoatHangerRegularIcon,
  thin: CoatHangerThinIcon,
});
