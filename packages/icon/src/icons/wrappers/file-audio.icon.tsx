import { createIcon } from "../../hocs/create-icon.hoc";
import { FileAudioBoldIcon } from "../bold/file-audio-bold.icon";
import { FileAudioDuotoneIcon } from "../duotone/file-audio-duotone.icon";
import { FileAudioFillIcon } from "../fill/file-audio-fill.icon";
import { FileAudioLightIcon } from "../light/file-audio-light.icon";
import { FileAudioRegularIcon } from "../regular/file-audio-regular.icon";
import { FileAudioThinIcon } from "../thin/file-audio-thin.icon";

export const FileAudioIcon = createIcon("FileAudio", {
  bold: FileAudioBoldIcon,
  duotone: FileAudioDuotoneIcon,
  fill: FileAudioFillIcon,
  light: FileAudioLightIcon,
  regular: FileAudioRegularIcon,
  thin: FileAudioThinIcon,
});
