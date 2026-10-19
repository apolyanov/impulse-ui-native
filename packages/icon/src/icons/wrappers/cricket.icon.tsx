import { createIcon } from "../../hocs/create-icon.hoc";
import { CricketBoldIcon } from "../bold/cricket-bold.icon";
import { CricketDuotoneIcon } from "../duotone/cricket-duotone.icon";
import { CricketFillIcon } from "../fill/cricket-fill.icon";
import { CricketLightIcon } from "../light/cricket-light.icon";
import { CricketRegularIcon } from "../regular/cricket-regular.icon";
import { CricketThinIcon } from "../thin/cricket-thin.icon";

export const CricketIcon = createIcon("Cricket", {
  bold: CricketBoldIcon,
  duotone: CricketDuotoneIcon,
  fill: CricketFillIcon,
  light: CricketLightIcon,
  regular: CricketRegularIcon,
  thin: CricketThinIcon,
});
