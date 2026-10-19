import { createIcon } from "../../hocs/create-icon.hoc";
import { GameControllerBoldIcon } from "../bold/game-controller-bold.icon";
import { GameControllerDuotoneIcon } from "../duotone/game-controller-duotone.icon";
import { GameControllerFillIcon } from "../fill/game-controller-fill.icon";
import { GameControllerLightIcon } from "../light/game-controller-light.icon";
import { GameControllerRegularIcon } from "../regular/game-controller-regular.icon";
import { GameControllerThinIcon } from "../thin/game-controller-thin.icon";

export const GameControllerIcon = createIcon("GameController", {
  bold: GameControllerBoldIcon,
  duotone: GameControllerDuotoneIcon,
  fill: GameControllerFillIcon,
  light: GameControllerLightIcon,
  regular: GameControllerRegularIcon,
  thin: GameControllerThinIcon,
});
