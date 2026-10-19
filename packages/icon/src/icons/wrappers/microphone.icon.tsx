import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrophoneBoldIcon } from "../bold/microphone-bold.icon";
import { MicrophoneDuotoneIcon } from "../duotone/microphone-duotone.icon";
import { MicrophoneFillIcon } from "../fill/microphone-fill.icon";
import { MicrophoneLightIcon } from "../light/microphone-light.icon";
import { MicrophoneRegularIcon } from "../regular/microphone-regular.icon";
import { MicrophoneThinIcon } from "../thin/microphone-thin.icon";

export const MicrophoneIcon = createIcon("Microphone", {
  bold: MicrophoneBoldIcon,
  duotone: MicrophoneDuotoneIcon,
  fill: MicrophoneFillIcon,
  light: MicrophoneLightIcon,
  regular: MicrophoneRegularIcon,
  thin: MicrophoneThinIcon,
});
