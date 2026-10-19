import { createIcon } from "../../hocs/create-icon.hoc";
import { FilePlusBoldIcon } from "../bold/file-plus-bold.icon";
import { FilePlusDuotoneIcon } from "../duotone/file-plus-duotone.icon";
import { FilePlusFillIcon } from "../fill/file-plus-fill.icon";
import { FilePlusLightIcon } from "../light/file-plus-light.icon";
import { FilePlusRegularIcon } from "../regular/file-plus-regular.icon";
import { FilePlusThinIcon } from "../thin/file-plus-thin.icon";

export const FilePlusIcon = createIcon("FilePlus", {
  bold: FilePlusBoldIcon,
  duotone: FilePlusDuotoneIcon,
  fill: FilePlusFillIcon,
  light: FilePlusLightIcon,
  regular: FilePlusRegularIcon,
  thin: FilePlusThinIcon,
});
