import { createIcon } from "../../hocs/create-icon.hoc";
import { FootballBoldIcon } from "../bold/football-bold.icon";
import { FootballDuotoneIcon } from "../duotone/football-duotone.icon";
import { FootballFillIcon } from "../fill/football-fill.icon";
import { FootballLightIcon } from "../light/football-light.icon";
import { FootballRegularIcon } from "../regular/football-regular.icon";
import { FootballThinIcon } from "../thin/football-thin.icon";

export const FootballIcon = createIcon("Football", {
  bold: FootballBoldIcon,
  duotone: FootballDuotoneIcon,
  fill: FootballFillIcon,
  light: FootballLightIcon,
  regular: FootballRegularIcon,
  thin: FootballThinIcon,
});
