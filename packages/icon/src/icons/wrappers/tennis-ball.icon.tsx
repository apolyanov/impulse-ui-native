import { createIcon } from "../../hocs/create-icon.hoc";
import { TennisBallBoldIcon } from "../bold/tennis-ball-bold.icon";
import { TennisBallDuotoneIcon } from "../duotone/tennis-ball-duotone.icon";
import { TennisBallFillIcon } from "../fill/tennis-ball-fill.icon";
import { TennisBallLightIcon } from "../light/tennis-ball-light.icon";
import { TennisBallRegularIcon } from "../regular/tennis-ball-regular.icon";
import { TennisBallThinIcon } from "../thin/tennis-ball-thin.icon";

export const TennisBallIcon = createIcon("TennisBall", {
  bold: TennisBallBoldIcon,
  duotone: TennisBallDuotoneIcon,
  fill: TennisBallFillIcon,
  light: TennisBallLightIcon,
  regular: TennisBallRegularIcon,
  thin: TennisBallThinIcon,
});
