import { createIcon } from "../../hocs/create-icon.hoc";
import { FilmScriptBoldIcon } from "../bold/film-script-bold.icon";
import { FilmScriptDuotoneIcon } from "../duotone/film-script-duotone.icon";
import { FilmScriptFillIcon } from "../fill/film-script-fill.icon";
import { FilmScriptLightIcon } from "../light/film-script-light.icon";
import { FilmScriptRegularIcon } from "../regular/film-script-regular.icon";
import { FilmScriptThinIcon } from "../thin/film-script-thin.icon";

export const FilmScriptIcon = createIcon("FilmScript", {
  bold: FilmScriptBoldIcon,
  duotone: FilmScriptDuotoneIcon,
  fill: FilmScriptFillIcon,
  light: FilmScriptLightIcon,
  regular: FilmScriptRegularIcon,
  thin: FilmScriptThinIcon,
});
