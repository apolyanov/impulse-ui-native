import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerNoneBoldIcon } from "../bold/speaker-none-bold.icon";
import { SpeakerNoneDuotoneIcon } from "../duotone/speaker-none-duotone.icon";
import { SpeakerNoneFillIcon } from "../fill/speaker-none-fill.icon";
import { SpeakerNoneLightIcon } from "../light/speaker-none-light.icon";
import { SpeakerNoneRegularIcon } from "../regular/speaker-none-regular.icon";
import { SpeakerNoneThinIcon } from "../thin/speaker-none-thin.icon";

export const SpeakerNoneIcon = createIcon("SpeakerNone", {
  bold: SpeakerNoneBoldIcon,
  duotone: SpeakerNoneDuotoneIcon,
  fill: SpeakerNoneFillIcon,
  light: SpeakerNoneLightIcon,
  regular: SpeakerNoneRegularIcon,
  thin: SpeakerNoneThinIcon,
});
