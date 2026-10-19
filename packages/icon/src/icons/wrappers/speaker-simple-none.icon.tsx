import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerSimpleNoneBoldIcon } from "../bold/speaker-simple-none-bold.icon";
import { SpeakerSimpleNoneDuotoneIcon } from "../duotone/speaker-simple-none-duotone.icon";
import { SpeakerSimpleNoneFillIcon } from "../fill/speaker-simple-none-fill.icon";
import { SpeakerSimpleNoneLightIcon } from "../light/speaker-simple-none-light.icon";
import { SpeakerSimpleNoneRegularIcon } from "../regular/speaker-simple-none-regular.icon";
import { SpeakerSimpleNoneThinIcon } from "../thin/speaker-simple-none-thin.icon";

export const SpeakerSimpleNoneIcon = createIcon("SpeakerSimpleNone", {
  bold: SpeakerSimpleNoneBoldIcon,
  duotone: SpeakerSimpleNoneDuotoneIcon,
  fill: SpeakerSimpleNoneFillIcon,
  light: SpeakerSimpleNoneLightIcon,
  regular: SpeakerSimpleNoneRegularIcon,
  thin: SpeakerSimpleNoneThinIcon,
});
