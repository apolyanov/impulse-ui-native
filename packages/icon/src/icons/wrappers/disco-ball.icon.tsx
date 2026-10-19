import { createIcon } from "../../hocs/create-icon.hoc";
import { DiscoBallBoldIcon } from "../bold/disco-ball-bold.icon";
import { DiscoBallDuotoneIcon } from "../duotone/disco-ball-duotone.icon";
import { DiscoBallFillIcon } from "../fill/disco-ball-fill.icon";
import { DiscoBallLightIcon } from "../light/disco-ball-light.icon";
import { DiscoBallRegularIcon } from "../regular/disco-ball-regular.icon";
import { DiscoBallThinIcon } from "../thin/disco-ball-thin.icon";

export const DiscoBallIcon = createIcon("DiscoBall", {
  bold: DiscoBallBoldIcon,
  duotone: DiscoBallDuotoneIcon,
  fill: DiscoBallFillIcon,
  light: DiscoBallLightIcon,
  regular: DiscoBallRegularIcon,
  thin: DiscoBallThinIcon,
});
