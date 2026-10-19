import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerLowBoldIcon } from "../bold/speaker-low-bold.icon";
import { SpeakerLowDuotoneIcon } from "../duotone/speaker-low-duotone.icon";
import { SpeakerLowFillIcon } from "../fill/speaker-low-fill.icon";
import { SpeakerLowLightIcon } from "../light/speaker-low-light.icon";
import { SpeakerLowRegularIcon } from "../regular/speaker-low-regular.icon";
import { SpeakerLowThinIcon } from "../thin/speaker-low-thin.icon";

export const SpeakerLowIcon = createIcon("SpeakerLow", {
  bold: SpeakerLowBoldIcon,
  duotone: SpeakerLowDuotoneIcon,
  fill: SpeakerLowFillIcon,
  light: SpeakerLowLightIcon,
  regular: SpeakerLowRegularIcon,
  thin: SpeakerLowThinIcon,
});
