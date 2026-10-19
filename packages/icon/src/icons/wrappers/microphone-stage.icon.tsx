import { createIcon } from "../../hocs/create-icon.hoc";
import { MicrophoneStageBoldIcon } from "../bold/microphone-stage-bold.icon";
import { MicrophoneStageDuotoneIcon } from "../duotone/microphone-stage-duotone.icon";
import { MicrophoneStageFillIcon } from "../fill/microphone-stage-fill.icon";
import { MicrophoneStageLightIcon } from "../light/microphone-stage-light.icon";
import { MicrophoneStageRegularIcon } from "../regular/microphone-stage-regular.icon";
import { MicrophoneStageThinIcon } from "../thin/microphone-stage-thin.icon";

export const MicrophoneStageIcon = createIcon("MicrophoneStage", {
  bold: MicrophoneStageBoldIcon,
  duotone: MicrophoneStageDuotoneIcon,
  fill: MicrophoneStageFillIcon,
  light: MicrophoneStageLightIcon,
  regular: MicrophoneStageRegularIcon,
  thin: MicrophoneStageThinIcon,
});
