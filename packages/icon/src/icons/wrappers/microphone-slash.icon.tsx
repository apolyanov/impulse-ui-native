import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrophoneSlashBoldIcon } from "../bold/microphone-slash-bold.icon";
import { MicrophoneSlashDuotoneIcon } from "../duotone/microphone-slash-duotone.icon";
import { MicrophoneSlashFillIcon } from "../fill/microphone-slash-fill.icon";
import { MicrophoneSlashLightIcon } from "../light/microphone-slash-light.icon";
import { MicrophoneSlashRegularIcon } from "../regular/microphone-slash-regular.icon";
import { MicrophoneSlashThinIcon } from "../thin/microphone-slash-thin.icon";

export const MicrophoneSlashIcon = createIcon("MicrophoneSlash", {
  bold: MicrophoneSlashBoldIcon,
  duotone: MicrophoneSlashDuotoneIcon,
  fill: MicrophoneSlashFillIcon,
  light: MicrophoneSlashLightIcon,
  regular: MicrophoneSlashRegularIcon,
  thin: MicrophoneSlashThinIcon,
});
