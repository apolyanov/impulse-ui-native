import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveformBoldIcon } from "../bold/waveform-bold.icon";
import { WaveformDuotoneIcon } from "../duotone/waveform-duotone.icon";
import { WaveformFillIcon } from "../fill/waveform-fill.icon";
import { WaveformLightIcon } from "../light/waveform-light.icon";
import { WaveformRegularIcon } from "../regular/waveform-regular.icon";
import { WaveformThinIcon } from "../thin/waveform-thin.icon";

export const WaveformIcon = createIcon("Waveform", {
  bold: WaveformBoldIcon,
  duotone: WaveformDuotoneIcon,
  fill: WaveformFillIcon,
  light: WaveformLightIcon,
  regular: WaveformRegularIcon,
  thin: WaveformThinIcon,
});
