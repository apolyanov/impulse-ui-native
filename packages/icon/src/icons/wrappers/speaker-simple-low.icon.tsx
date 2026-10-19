import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerSimpleLowBoldIcon } from "../bold/speaker-simple-low-bold.icon";
import { SpeakerSimpleLowDuotoneIcon } from "../duotone/speaker-simple-low-duotone.icon";
import { SpeakerSimpleLowFillIcon } from "../fill/speaker-simple-low-fill.icon";
import { SpeakerSimpleLowLightIcon } from "../light/speaker-simple-low-light.icon";
import { SpeakerSimpleLowRegularIcon } from "../regular/speaker-simple-low-regular.icon";
import { SpeakerSimpleLowThinIcon } from "../thin/speaker-simple-low-thin.icon";

export const SpeakerSimpleLowIcon = createIcon("SpeakerSimpleLow", {
  bold: SpeakerSimpleLowBoldIcon,
  duotone: SpeakerSimpleLowDuotoneIcon,
  fill: SpeakerSimpleLowFillIcon,
  light: SpeakerSimpleLowLightIcon,
  regular: SpeakerSimpleLowRegularIcon,
  thin: SpeakerSimpleLowThinIcon,
});
