import { createIcon } from "../../hocs/create-icon.hoc";
import { FilmSlateBoldIcon } from "../bold/film-slate-bold.icon";
import { FilmSlateDuotoneIcon } from "../duotone/film-slate-duotone.icon";
import { FilmSlateFillIcon } from "../fill/film-slate-fill.icon";
import { FilmSlateLightIcon } from "../light/film-slate-light.icon";
import { FilmSlateRegularIcon } from "../regular/film-slate-regular.icon";
import { FilmSlateThinIcon } from "../thin/film-slate-thin.icon";

export const FilmSlateIcon = createIcon("FilmSlate", {
  bold: FilmSlateBoldIcon,
  duotone: FilmSlateDuotoneIcon,
  fill: FilmSlateFillIcon,
  light: FilmSlateLightIcon,
  regular: FilmSlateRegularIcon,
  thin: FilmSlateThinIcon,
});
