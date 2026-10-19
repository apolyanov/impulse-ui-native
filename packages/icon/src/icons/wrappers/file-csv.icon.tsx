import { createIcon } from "../../hocs/create-icon.hoc";
import { FileCsvBoldIcon } from "../bold/file-csv-bold.icon";
import { FileCsvDuotoneIcon } from "../duotone/file-csv-duotone.icon";
import { FileCsvFillIcon } from "../fill/file-csv-fill.icon";
import { FileCsvLightIcon } from "../light/file-csv-light.icon";
import { FileCsvRegularIcon } from "../regular/file-csv-regular.icon";
import { FileCsvThinIcon } from "../thin/file-csv-thin.icon";

export const FileCsvIcon = createIcon("FileCsv", {
  bold: FileCsvBoldIcon,
  duotone: FileCsvDuotoneIcon,
  fill: FileCsvFillIcon,
  light: FileCsvLightIcon,
  regular: FileCsvRegularIcon,
  thin: FileCsvThinIcon,
});
