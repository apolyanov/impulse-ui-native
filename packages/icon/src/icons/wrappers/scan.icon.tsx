import { createIcon } from "../../hocs/create-icon.hoc";
import { ScanBoldIcon } from "../bold/scan-bold.icon";
import { ScanDuotoneIcon } from "../duotone/scan-duotone.icon";
import { ScanFillIcon } from "../fill/scan-fill.icon";
import { ScanLightIcon } from "../light/scan-light.icon";
import { ScanRegularIcon } from "../regular/scan-regular.icon";
import { ScanThinIcon } from "../thin/scan-thin.icon";

export const ScanIcon = createIcon("Scan", {
  bold: ScanBoldIcon,
  duotone: ScanDuotoneIcon,
  fill: ScanFillIcon,
  light: ScanLightIcon,
  regular: ScanRegularIcon,
  thin: ScanThinIcon,
});
