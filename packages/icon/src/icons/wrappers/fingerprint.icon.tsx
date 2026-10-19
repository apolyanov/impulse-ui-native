import { createIcon } from "../../hocs/create-icon.hoc";
import { FingerprintBoldIcon } from "../bold/fingerprint-bold.icon";
import { FingerprintDuotoneIcon } from "../duotone/fingerprint-duotone.icon";
import { FingerprintFillIcon } from "../fill/fingerprint-fill.icon";
import { FingerprintLightIcon } from "../light/fingerprint-light.icon";
import { FingerprintRegularIcon } from "../regular/fingerprint-regular.icon";
import { FingerprintThinIcon } from "../thin/fingerprint-thin.icon";

export const FingerprintIcon = createIcon("Fingerprint", {
  bold: FingerprintBoldIcon,
  duotone: FingerprintDuotoneIcon,
  fill: FingerprintFillIcon,
  light: FingerprintLightIcon,
  regular: FingerprintRegularIcon,
  thin: FingerprintThinIcon,
});
