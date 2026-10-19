import { createIcon } from "../../hocs/create-icon.hoc";
import { RecordBoldIcon } from "../bold/record-bold.icon";
import { RecordDuotoneIcon } from "../duotone/record-duotone.icon";
import { RecordFillIcon } from "../fill/record-fill.icon";
import { RecordLightIcon } from "../light/record-light.icon";
import { RecordRegularIcon } from "../regular/record-regular.icon";
import { RecordThinIcon } from "../thin/record-thin.icon";

export const RecordIcon = createIcon("Record", {
  bold: RecordBoldIcon,
  duotone: RecordDuotoneIcon,
  fill: RecordFillIcon,
  light: RecordLightIcon,
  regular: RecordRegularIcon,
  thin: RecordThinIcon,
});
