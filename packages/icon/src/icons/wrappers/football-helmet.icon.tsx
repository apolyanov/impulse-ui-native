import { createIcon } from "../../hocs/create-icon.hoc";
import { FootballHelmetBoldIcon } from "../bold/football-helmet-bold.icon";
import { FootballHelmetDuotoneIcon } from "../duotone/football-helmet-duotone.icon";
import { FootballHelmetFillIcon } from "../fill/football-helmet-fill.icon";
import { FootballHelmetLightIcon } from "../light/football-helmet-light.icon";
import { FootballHelmetRegularIcon } from "../regular/football-helmet-regular.icon";
import { FootballHelmetThinIcon } from "../thin/football-helmet-thin.icon";

export const FootballHelmetIcon = createIcon("FootballHelmet", {
  bold: FootballHelmetBoldIcon,
  duotone: FootballHelmetDuotoneIcon,
  fill: FootballHelmetFillIcon,
  light: FootballHelmetLightIcon,
  regular: FootballHelmetRegularIcon,
  thin: FootballHelmetThinIcon,
});
