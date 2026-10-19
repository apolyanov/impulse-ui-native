import { createIcon } from "../../hocs/create-icon.hoc";
import { SubtitlesBoldIcon } from "../bold/subtitles-bold.icon";
import { SubtitlesDuotoneIcon } from "../duotone/subtitles-duotone.icon";
import { SubtitlesFillIcon } from "../fill/subtitles-fill.icon";
import { SubtitlesLightIcon } from "../light/subtitles-light.icon";
import { SubtitlesRegularIcon } from "../regular/subtitles-regular.icon";
import { SubtitlesThinIcon } from "../thin/subtitles-thin.icon";

export const SubtitlesIcon = createIcon("Subtitles", {
  bold: SubtitlesBoldIcon,
  duotone: SubtitlesDuotoneIcon,
  fill: SubtitlesFillIcon,
  light: SubtitlesLightIcon,
  regular: SubtitlesRegularIcon,
  thin: SubtitlesThinIcon,
});
