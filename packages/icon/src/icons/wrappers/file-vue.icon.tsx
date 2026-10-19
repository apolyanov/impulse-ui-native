import { createIcon } from "../../hocs/create-icon.hoc";
import { FileVueBoldIcon } from "../bold/file-vue-bold.icon";
import { FileVueDuotoneIcon } from "../duotone/file-vue-duotone.icon";
import { FileVueFillIcon } from "../fill/file-vue-fill.icon";
import { FileVueLightIcon } from "../light/file-vue-light.icon";
import { FileVueRegularIcon } from "../regular/file-vue-regular.icon";
import { FileVueThinIcon } from "../thin/file-vue-thin.icon";

export const FileVueIcon = createIcon("FileVue", {
  bold: FileVueBoldIcon,
  duotone: FileVueDuotoneIcon,
  fill: FileVueFillIcon,
  light: FileVueLightIcon,
  regular: FileVueRegularIcon,
  thin: FileVueThinIcon,
});
