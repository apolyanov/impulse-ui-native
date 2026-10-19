import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerHighBoldIcon } from "../bold/speaker-high-bold.icon";
import { SpeakerHighDuotoneIcon } from "../duotone/speaker-high-duotone.icon";
import { SpeakerHighFillIcon } from "../fill/speaker-high-fill.icon";
import { SpeakerHighLightIcon } from "../light/speaker-high-light.icon";
import { SpeakerHighRegularIcon } from "../regular/speaker-high-regular.icon";
import { SpeakerHighThinIcon } from "../thin/speaker-high-thin.icon";

export const SpeakerHighIcon = createIcon("SpeakerHigh", {
  bold: SpeakerHighBoldIcon,
  duotone: SpeakerHighDuotoneIcon,
  fill: SpeakerHighFillIcon,
  light: SpeakerHighLightIcon,
  regular: SpeakerHighRegularIcon,
  thin: SpeakerHighThinIcon,
});
