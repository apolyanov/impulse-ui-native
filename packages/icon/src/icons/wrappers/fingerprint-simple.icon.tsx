import { createIcon } from "../../hocs/create-icon.hoc";
import { FingerprintSimpleBoldIcon } from "../bold/fingerprint-simple-bold.icon";
import { FingerprintSimpleDuotoneIcon } from "../duotone/fingerprint-simple-duotone.icon";
import { FingerprintSimpleFillIcon } from "../fill/fingerprint-simple-fill.icon";
import { FingerprintSimpleLightIcon } from "../light/fingerprint-simple-light.icon";
import { FingerprintSimpleRegularIcon } from "../regular/fingerprint-simple-regular.icon";
import { FingerprintSimpleThinIcon } from "../thin/fingerprint-simple-thin.icon";

export const FingerprintSimpleIcon = createIcon("FingerprintSimple", {
  bold: FingerprintSimpleBoldIcon,
  duotone: FingerprintSimpleDuotoneIcon,
  fill: FingerprintSimpleFillIcon,
  light: FingerprintSimpleLightIcon,
  regular: FingerprintSimpleRegularIcon,
  thin: FingerprintSimpleThinIcon,
});
