import { createIcon } from "../../hocs/create-icon.hoc";
import { SoccerBallBoldIcon } from "../bold/soccer-ball-bold.icon";
import { SoccerBallDuotoneIcon } from "../duotone/soccer-ball-duotone.icon";
import { SoccerBallFillIcon } from "../fill/soccer-ball-fill.icon";
import { SoccerBallLightIcon } from "../light/soccer-ball-light.icon";
import { SoccerBallRegularIcon } from "../regular/soccer-ball-regular.icon";
import { SoccerBallThinIcon } from "../thin/soccer-ball-thin.icon";

export const SoccerBallIcon = createIcon("SoccerBall", {
  bold: SoccerBallBoldIcon,
  duotone: SoccerBallDuotoneIcon,
  fill: SoccerBallFillIcon,
  light: SoccerBallLightIcon,
  regular: SoccerBallRegularIcon,
  thin: SoccerBallThinIcon,
});
