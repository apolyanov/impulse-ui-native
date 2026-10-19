import { createIcon } from "../../hocs/create-icon.hoc";
import { WavesBoldIcon } from "../bold/waves-bold.icon";
import { WavesDuotoneIcon } from "../duotone/waves-duotone.icon";
import { WavesFillIcon } from "../fill/waves-fill.icon";
import { WavesLightIcon } from "../light/waves-light.icon";
import { WavesRegularIcon } from "../regular/waves-regular.icon";
import { WavesThinIcon } from "../thin/waves-thin.icon";

export const WavesIcon = createIcon("Waves", {
  bold: WavesBoldIcon,
  duotone: WavesDuotoneIcon,
  fill: WavesFillIcon,
  light: WavesLightIcon,
  regular: WavesRegularIcon,
  thin: WavesThinIcon,
});
