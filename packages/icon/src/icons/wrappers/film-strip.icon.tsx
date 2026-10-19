import { createIcon } from "../../hocs/create-icon.hoc";
import { FilmStripBoldIcon } from "../bold/film-strip-bold.icon";
import { FilmStripDuotoneIcon } from "../duotone/film-strip-duotone.icon";
import { FilmStripFillIcon } from "../fill/film-strip-fill.icon";
import { FilmStripLightIcon } from "../light/film-strip-light.icon";
import { FilmStripRegularIcon } from "../regular/film-strip-regular.icon";
import { FilmStripThinIcon } from "../thin/film-strip-thin.icon";

export const FilmStripIcon = createIcon("FilmStrip", {
  bold: FilmStripBoldIcon,
  duotone: FilmStripDuotoneIcon,
  fill: FilmStripFillIcon,
  light: FilmStripLightIcon,
  regular: FilmStripRegularIcon,
  thin: FilmStripThinIcon,
});
