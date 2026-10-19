import { createIcon } from "../../hocs/create-icon.hoc";
import { BeachBallBoldIcon } from "../bold/beach-ball-bold.icon";
import { BeachBallDuotoneIcon } from "../duotone/beach-ball-duotone.icon";
import { BeachBallFillIcon } from "../fill/beach-ball-fill.icon";
import { BeachBallLightIcon } from "../light/beach-ball-light.icon";
import { BeachBallRegularIcon } from "../regular/beach-ball-regular.icon";
import { BeachBallThinIcon } from "../thin/beach-ball-thin.icon";

export const BeachBallIcon = createIcon("BeachBall", {
  bold: BeachBallBoldIcon,
  duotone: BeachBallDuotoneIcon,
  fill: BeachBallFillIcon,
  light: BeachBallLightIcon,
  regular: BeachBallRegularIcon,
  thin: BeachBallThinIcon,
});
