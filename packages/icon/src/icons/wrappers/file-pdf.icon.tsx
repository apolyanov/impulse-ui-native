import { createIcon } from "../../hocs/create-icon.hoc";
import { FilePdfBoldIcon } from "../bold/file-pdf-bold.icon";
import { FilePdfDuotoneIcon } from "../duotone/file-pdf-duotone.icon";
import { FilePdfFillIcon } from "../fill/file-pdf-fill.icon";
import { FilePdfLightIcon } from "../light/file-pdf-light.icon";
import { FilePdfRegularIcon } from "../regular/file-pdf-regular.icon";
import { FilePdfThinIcon } from "../thin/file-pdf-thin.icon";

export const FilePdfIcon = createIcon("FilePdf", {
  bold: FilePdfBoldIcon,
  duotone: FilePdfDuotoneIcon,
  fill: FilePdfFillIcon,
  light: FilePdfLightIcon,
  regular: FilePdfRegularIcon,
  thin: FilePdfThinIcon,
});
