import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerXBoldIcon } from "../bold/speaker-x-bold.icon";
import { SpeakerXDuotoneIcon } from "../duotone/speaker-x-duotone.icon";
import { SpeakerXFillIcon } from "../fill/speaker-x-fill.icon";
import { SpeakerXLightIcon } from "../light/speaker-x-light.icon";
import { SpeakerXRegularIcon } from "../regular/speaker-x-regular.icon";
import { SpeakerXThinIcon } from "../thin/speaker-x-thin.icon";

export const SpeakerXIcon = createIcon("SpeakerX", {
  bold: SpeakerXBoldIcon,
  duotone: SpeakerXDuotoneIcon,
  fill: SpeakerXFillIcon,
  light: SpeakerXLightIcon,
  regular: SpeakerXRegularIcon,
  thin: SpeakerXThinIcon,
});
