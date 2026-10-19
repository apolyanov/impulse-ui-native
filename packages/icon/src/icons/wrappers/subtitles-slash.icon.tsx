import { createIcon } from "../../hocs/create-icon.hoc";
import { SubtitlesSlashBoldIcon } from "../bold/subtitles-slash-bold.icon";
import { SubtitlesSlashDuotoneIcon } from "../duotone/subtitles-slash-duotone.icon";
import { SubtitlesSlashFillIcon } from "../fill/subtitles-slash-fill.icon";
import { SubtitlesSlashLightIcon } from "../light/subtitles-slash-light.icon";
import { SubtitlesSlashRegularIcon } from "../regular/subtitles-slash-regular.icon";
import { SubtitlesSlashThinIcon } from "../thin/subtitles-slash-thin.icon";

export const SubtitlesSlashIcon = createIcon("SubtitlesSlash", {
  bold: SubtitlesSlashBoldIcon,
  duotone: SubtitlesSlashDuotoneIcon,
  fill: SubtitlesSlashFillIcon,
  light: SubtitlesSlashLightIcon,
  regular: SubtitlesSlashRegularIcon,
  thin: SubtitlesSlashThinIcon,
});
