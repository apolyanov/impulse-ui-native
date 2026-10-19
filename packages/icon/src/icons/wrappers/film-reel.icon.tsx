import { createIcon } from "../../hocs/create-icon.hoc";
import { FilmReelBoldIcon } from "../bold/film-reel-bold.icon";
import { FilmReelDuotoneIcon } from "../duotone/film-reel-duotone.icon";
import { FilmReelFillIcon } from "../fill/film-reel-fill.icon";
import { FilmReelLightIcon } from "../light/film-reel-light.icon";
import { FilmReelRegularIcon } from "../regular/film-reel-regular.icon";
import { FilmReelThinIcon } from "../thin/film-reel-thin.icon";

export const FilmReelIcon = createIcon("FilmReel", {
  bold: FilmReelBoldIcon,
  duotone: FilmReelDuotoneIcon,
  fill: FilmReelFillIcon,
  light: FilmReelLightIcon,
  regular: FilmReelRegularIcon,
  thin: FilmReelThinIcon,
});
