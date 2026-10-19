import { createIcon } from "../../hocs/create-icon.hoc";
import { FileTsBoldIcon } from "../bold/file-ts-bold.icon";
import { FileTsDuotoneIcon } from "../duotone/file-ts-duotone.icon";
import { FileTsFillIcon } from "../fill/file-ts-fill.icon";
import { FileTsLightIcon } from "../light/file-ts-light.icon";
import { FileTsRegularIcon } from "../regular/file-ts-regular.icon";
import { FileTsThinIcon } from "../thin/file-ts-thin.icon";

export const FileTsIcon = createIcon("FileTs", {
  bold: FileTsBoldIcon,
  duotone: FileTsDuotoneIcon,
  fill: FileTsFillIcon,
  light: FileTsLightIcon,
  regular: FileTsRegularIcon,
  thin: FileTsThinIcon,
});
