import { createIcon } from "../../hocs/create-icon.hoc";
import { EqualizerBoldIcon } from "../bold/equalizer-bold.icon";
import { EqualizerDuotoneIcon } from "../duotone/equalizer-duotone.icon";
import { EqualizerFillIcon } from "../fill/equalizer-fill.icon";
import { EqualizerLightIcon } from "../light/equalizer-light.icon";
import { EqualizerRegularIcon } from "../regular/equalizer-regular.icon";
import { EqualizerThinIcon } from "../thin/equalizer-thin.icon";

export const EqualizerIcon = createIcon("Equalizer", {
  bold: EqualizerBoldIcon,
  duotone: EqualizerDuotoneIcon,
  fill: EqualizerFillIcon,
  light: EqualizerLightIcon,
  regular: EqualizerRegularIcon,
  thin: EqualizerThinIcon,
});
