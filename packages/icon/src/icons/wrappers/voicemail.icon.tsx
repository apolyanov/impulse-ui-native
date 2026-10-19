import { createIcon } from "../../hocs/create-icon.hoc";
import { VoicemailBoldIcon } from "../bold/voicemail-bold.icon";
import { VoicemailDuotoneIcon } from "../duotone/voicemail-duotone.icon";
import { VoicemailFillIcon } from "../fill/voicemail-fill.icon";
import { VoicemailLightIcon } from "../light/voicemail-light.icon";
import { VoicemailRegularIcon } from "../regular/voicemail-regular.icon";
import { VoicemailThinIcon } from "../thin/voicemail-thin.icon";

export const VoicemailIcon = createIcon("Voicemail", {
  bold: VoicemailBoldIcon,
  duotone: VoicemailDuotoneIcon,
  fill: VoicemailFillIcon,
  light: VoicemailLightIcon,
  regular: VoicemailRegularIcon,
  thin: VoicemailThinIcon,
});
