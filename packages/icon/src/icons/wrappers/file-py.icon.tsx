import { createIcon } from "../../hocs/create-icon.hoc";
import { FilePyBoldIcon } from "../bold/file-py-bold.icon";
import { FilePyDuotoneIcon } from "../duotone/file-py-duotone.icon";
import { FilePyFillIcon } from "../fill/file-py-fill.icon";
import { FilePyLightIcon } from "../light/file-py-light.icon";
import { FilePyRegularIcon } from "../regular/file-py-regular.icon";
import { FilePyThinIcon } from "../thin/file-py-thin.icon";

export const FilePyIcon = createIcon("FilePy", {
  bold: FilePyBoldIcon,
  duotone: FilePyDuotoneIcon,
  fill: FilePyFillIcon,
  light: FilePyLightIcon,
  regular: FilePyRegularIcon,
  thin: FilePyThinIcon,
});
