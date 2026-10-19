import { createIcon } from "../../hocs/create-icon.hoc";
import { BowlingBallBoldIcon } from "../bold/bowling-ball-bold.icon";
import { BowlingBallDuotoneIcon } from "../duotone/bowling-ball-duotone.icon";
import { BowlingBallFillIcon } from "../fill/bowling-ball-fill.icon";
import { BowlingBallLightIcon } from "../light/bowling-ball-light.icon";
import { BowlingBallRegularIcon } from "../regular/bowling-ball-regular.icon";
import { BowlingBallThinIcon } from "../thin/bowling-ball-thin.icon";

export const BowlingBallIcon = createIcon("BowlingBall", {
  bold: BowlingBallBoldIcon,
  duotone: BowlingBallDuotoneIcon,
  fill: BowlingBallFillIcon,
  light: BowlingBallLightIcon,
  regular: BowlingBallRegularIcon,
  thin: BowlingBallThinIcon,
});
