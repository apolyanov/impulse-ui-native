import { createIcon } from "../../hocs/create-icon.hoc";
import { TrophyBoldIcon } from "../bold/trophy-bold.icon";
import { TrophyDuotoneIcon } from "../duotone/trophy-duotone.icon";
import { TrophyFillIcon } from "../fill/trophy-fill.icon";
import { TrophyLightIcon } from "../light/trophy-light.icon";
import { TrophyRegularIcon } from "../regular/trophy-regular.icon";
import { TrophyThinIcon } from "../thin/trophy-thin.icon";

export const TrophyIcon = createIcon("Trophy", {
  bold: TrophyBoldIcon,
  duotone: TrophyDuotoneIcon,
  fill: TrophyFillIcon,
  light: TrophyLightIcon,
  regular: TrophyRegularIcon,
  thin: TrophyThinIcon,
});
