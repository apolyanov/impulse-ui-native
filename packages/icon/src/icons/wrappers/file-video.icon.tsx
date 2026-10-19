import { createIcon } from "../../hocs/create-icon.hoc";
import { FileVideoBoldIcon } from "../bold/file-video-bold.icon";
import { FileVideoDuotoneIcon } from "../duotone/file-video-duotone.icon";
import { FileVideoFillIcon } from "../fill/file-video-fill.icon";
import { FileVideoLightIcon } from "../light/file-video-light.icon";
import { FileVideoRegularIcon } from "../regular/file-video-regular.icon";
import { FileVideoThinIcon } from "../thin/file-video-thin.icon";

export const FileVideoIcon = createIcon("FileVideo", {
  bold: FileVideoBoldIcon,
  duotone: FileVideoDuotoneIcon,
  fill: FileVideoFillIcon,
  light: FileVideoLightIcon,
  regular: FileVideoRegularIcon,
  thin: FileVideoThinIcon,
});
