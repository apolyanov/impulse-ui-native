import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerSimpleHighBoldIcon } from "../bold/speaker-simple-high-bold.icon";
import { SpeakerSimpleHighDuotoneIcon } from "../duotone/speaker-simple-high-duotone.icon";
import { SpeakerSimpleHighFillIcon } from "../fill/speaker-simple-high-fill.icon";
import { SpeakerSimpleHighLightIcon } from "../light/speaker-simple-high-light.icon";
import { SpeakerSimpleHighRegularIcon } from "../regular/speaker-simple-high-regular.icon";
import { SpeakerSimpleHighThinIcon } from "../thin/speaker-simple-high-thin.icon";

export const SpeakerSimpleHighIcon = createIcon("SpeakerSimpleHigh", {
  bold: SpeakerSimpleHighBoldIcon,
  duotone: SpeakerSimpleHighDuotoneIcon,
  fill: SpeakerSimpleHighFillIcon,
  light: SpeakerSimpleHighLightIcon,
  regular: SpeakerSimpleHighRegularIcon,
  thin: SpeakerSimpleHighThinIcon,
});
