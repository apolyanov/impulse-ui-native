import { createIcon } from "../../hocs/create-icon.hoc";
import { ScanSmileyBoldIcon } from "../bold/scan-smiley-bold.icon";
import { ScanSmileyDuotoneIcon } from "../duotone/scan-smiley-duotone.icon";
import { ScanSmileyFillIcon } from "../fill/scan-smiley-fill.icon";
import { ScanSmileyLightIcon } from "../light/scan-smiley-light.icon";
import { ScanSmileyRegularIcon } from "../regular/scan-smiley-regular.icon";
import { ScanSmileyThinIcon } from "../thin/scan-smiley-thin.icon";

export const ScanSmileyIcon = createIcon("ScanSmiley", {
  bold: ScanSmileyBoldIcon,
  duotone: ScanSmileyDuotoneIcon,
  fill: ScanSmileyFillIcon,
  light: ScanSmileyLightIcon,
  regular: ScanSmileyRegularIcon,
  thin: ScanSmileyThinIcon,
});
