import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveformSlashBoldIcon } from "../bold/waveform-slash-bold.icon";
import { WaveformSlashDuotoneIcon } from "../duotone/waveform-slash-duotone.icon";
import { WaveformSlashFillIcon } from "../fill/waveform-slash-fill.icon";
import { WaveformSlashLightIcon } from "../light/waveform-slash-light.icon";
import { WaveformSlashRegularIcon } from "../regular/waveform-slash-regular.icon";
import { WaveformSlashThinIcon } from "../thin/waveform-slash-thin.icon";

export const WaveformSlashIcon = createIcon("WaveformSlash", {
  bold: WaveformSlashBoldIcon,
  duotone: WaveformSlashDuotoneIcon,
  fill: WaveformSlashFillIcon,
  light: WaveformSlashLightIcon,
  regular: WaveformSlashRegularIcon,
  thin: WaveformSlashThinIcon,
});
