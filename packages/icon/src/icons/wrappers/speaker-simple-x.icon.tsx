import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerSimpleXBoldIcon } from "../bold/speaker-simple-x-bold.icon";
import { SpeakerSimpleXDuotoneIcon } from "../duotone/speaker-simple-x-duotone.icon";
import { SpeakerSimpleXFillIcon } from "../fill/speaker-simple-x-fill.icon";
import { SpeakerSimpleXLightIcon } from "../light/speaker-simple-x-light.icon";
import { SpeakerSimpleXRegularIcon } from "../regular/speaker-simple-x-regular.icon";
import { SpeakerSimpleXThinIcon } from "../thin/speaker-simple-x-thin.icon";

export const SpeakerSimpleXIcon = createIcon("SpeakerSimpleX", {
  bold: SpeakerSimpleXBoldIcon,
  duotone: SpeakerSimpleXDuotoneIcon,
  fill: SpeakerSimpleXFillIcon,
  light: SpeakerSimpleXLightIcon,
  regular: SpeakerSimpleXRegularIcon,
  thin: SpeakerSimpleXThinIcon,
});
