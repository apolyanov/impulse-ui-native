import { createIcon } from "../../hocs/create-icon.hoc";
import { SpinnerBallBoldIcon } from "../bold/spinner-ball-bold.icon";
import { SpinnerBallDuotoneIcon } from "../duotone/spinner-ball-duotone.icon";
import { SpinnerBallFillIcon } from "../fill/spinner-ball-fill.icon";
import { SpinnerBallLightIcon } from "../light/spinner-ball-light.icon";
import { SpinnerBallRegularIcon } from "../regular/spinner-ball-regular.icon";
import { SpinnerBallThinIcon } from "../thin/spinner-ball-thin.icon";

export const SpinnerBallIcon = createIcon("SpinnerBall", {
  bold: SpinnerBallBoldIcon,
  duotone: SpinnerBallDuotoneIcon,
  fill: SpinnerBallFillIcon,
  light: SpinnerBallLightIcon,
  regular: SpinnerBallRegularIcon,
  thin: SpinnerBallThinIcon,
});
