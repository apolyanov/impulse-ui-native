import { createIcon } from "../../hocs/create-icon.hoc";
import { SignatureBoldIcon } from "../bold/signature-bold.icon";
import { SignatureDuotoneIcon } from "../duotone/signature-duotone.icon";
import { SignatureFillIcon } from "../fill/signature-fill.icon";
import { SignatureLightIcon } from "../light/signature-light.icon";
import { SignatureRegularIcon } from "../regular/signature-regular.icon";
import { SignatureThinIcon } from "../thin/signature-thin.icon";

export const SignatureIcon = createIcon("Signature", {
  bold: SignatureBoldIcon,
  duotone: SignatureDuotoneIcon,
  fill: SignatureFillIcon,
  light: SignatureLightIcon,
  regular: SignatureRegularIcon,
  thin: SignatureThinIcon,
});
