import { createIcon } from "../../hocs/create-icon.hoc";
import { VinylRecordBoldIcon } from "../bold/vinyl-record-bold.icon";
import { VinylRecordDuotoneIcon } from "../duotone/vinyl-record-duotone.icon";
import { VinylRecordFillIcon } from "../fill/vinyl-record-fill.icon";
import { VinylRecordLightIcon } from "../light/vinyl-record-light.icon";
import { VinylRecordRegularIcon } from "../regular/vinyl-record-regular.icon";
import { VinylRecordThinIcon } from "../thin/vinyl-record-thin.icon";

export const VinylRecordIcon = createIcon("VinylRecord", {
  bold: VinylRecordBoldIcon,
  duotone: VinylRecordDuotoneIcon,
  fill: VinylRecordFillIcon,
  light: VinylRecordLightIcon,
  regular: VinylRecordRegularIcon,
  thin: VinylRecordThinIcon,
});
