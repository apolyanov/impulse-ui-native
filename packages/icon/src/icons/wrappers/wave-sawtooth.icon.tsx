import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveSawtoothBoldIcon } from "../bold/wave-sawtooth-bold.icon";
import { WaveSawtoothDuotoneIcon } from "../duotone/wave-sawtooth-duotone.icon";
import { WaveSawtoothFillIcon } from "../fill/wave-sawtooth-fill.icon";
import { WaveSawtoothLightIcon } from "../light/wave-sawtooth-light.icon";
import { WaveSawtoothRegularIcon } from "../regular/wave-sawtooth-regular.icon";
import { WaveSawtoothThinIcon } from "../thin/wave-sawtooth-thin.icon";

export const WaveSawtoothIcon = createIcon("WaveSawtooth", {
  bold: WaveSawtoothBoldIcon,
  duotone: WaveSawtoothDuotoneIcon,
  fill: WaveSawtoothFillIcon,
  light: WaveSawtoothLightIcon,
  regular: WaveSawtoothRegularIcon,
  thin: WaveSawtoothThinIcon,
});
