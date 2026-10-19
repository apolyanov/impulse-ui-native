import { createIcon } from "../../hocs/create-icon.hoc";
import { FileXlsBoldIcon } from "../bold/file-xls-bold.icon";
import { FileXlsDuotoneIcon } from "../duotone/file-xls-duotone.icon";
import { FileXlsFillIcon } from "../fill/file-xls-fill.icon";
import { FileXlsLightIcon } from "../light/file-xls-light.icon";
import { FileXlsRegularIcon } from "../regular/file-xls-regular.icon";
import { FileXlsThinIcon } from "../thin/file-xls-thin.icon";

export const FileXlsIcon = createIcon("FileXls", {
  bold: FileXlsBoldIcon,
  duotone: FileXlsDuotoneIcon,
  fill: FileXlsFillIcon,
  light: FileXlsLightIcon,
  regular: FileXlsRegularIcon,
  thin: FileXlsThinIcon,
});
