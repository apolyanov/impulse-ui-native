import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerHifiBoldIcon } from "../bold/speaker-hifi-bold.icon";
import { SpeakerHifiDuotoneIcon } from "../duotone/speaker-hifi-duotone.icon";
import { SpeakerHifiFillIcon } from "../fill/speaker-hifi-fill.icon";
import { SpeakerHifiLightIcon } from "../light/speaker-hifi-light.icon";
import { SpeakerHifiRegularIcon } from "../regular/speaker-hifi-regular.icon";
import { SpeakerHifiThinIcon } from "../thin/speaker-hifi-thin.icon";

export const SpeakerHifiIcon = createIcon("SpeakerHifi", {
  bold: SpeakerHifiBoldIcon,
  duotone: SpeakerHifiDuotoneIcon,
  fill: SpeakerHifiFillIcon,
  light: SpeakerHifiLightIcon,
  regular: SpeakerHifiRegularIcon,
  thin: SpeakerHifiThinIcon,
});
