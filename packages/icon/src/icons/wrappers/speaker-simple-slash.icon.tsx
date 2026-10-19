import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeakerSimpleSlashBoldIcon } from "../bold/speaker-simple-slash-bold.icon";
import { SpeakerSimpleSlashDuotoneIcon } from "../duotone/speaker-simple-slash-duotone.icon";
import { SpeakerSimpleSlashFillIcon } from "../fill/speaker-simple-slash-fill.icon";
import { SpeakerSimpleSlashLightIcon } from "../light/speaker-simple-slash-light.icon";
import { SpeakerSimpleSlashRegularIcon } from "../regular/speaker-simple-slash-regular.icon";
import { SpeakerSimpleSlashThinIcon } from "../thin/speaker-simple-slash-thin.icon";

export const SpeakerSimpleSlashIcon = createIcon("SpeakerSimpleSlash", {
  bold: SpeakerSimpleSlashBoldIcon,
  duotone: SpeakerSimpleSlashDuotoneIcon,
  fill: SpeakerSimpleSlashFillIcon,
  light: SpeakerSimpleSlashLightIcon,
  regular: SpeakerSimpleSlashRegularIcon,
  thin: SpeakerSimpleSlashThinIcon,
});
