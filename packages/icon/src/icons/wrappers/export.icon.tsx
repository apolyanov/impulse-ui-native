import { createIcon } from "../../hocs/create-icon.hoc";
import { ExportBoldIcon } from "../bold/export-bold.icon";
import { ExportDuotoneIcon } from "../duotone/export-duotone.icon";
import { ExportFillIcon } from "../fill/export-fill.icon";
import { ExportLightIcon } from "../light/export-light.icon";
import { ExportRegularIcon } from "../regular/export-regular.icon";
import { ExportThinIcon } from "../thin/export-thin.icon";

export const ExportIcon = createIcon("Export", {
  bold: ExportBoldIcon,
  duotone: ExportDuotoneIcon,
  fill: ExportFillIcon,
  light: ExportLightIcon,
  regular: ExportRegularIcon,
  thin: ExportThinIcon,
});
