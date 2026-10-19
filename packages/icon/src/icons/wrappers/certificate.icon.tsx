import { createIcon } from "../../hocs/create-icon.hoc";
import { CertificateBoldIcon } from "../bold/certificate-bold.icon";
import { CertificateDuotoneIcon } from "../duotone/certificate-duotone.icon";
import { CertificateFillIcon } from "../fill/certificate-fill.icon";
import { CertificateLightIcon } from "../light/certificate-light.icon";
import { CertificateRegularIcon } from "../regular/certificate-regular.icon";
import { CertificateThinIcon } from "../thin/certificate-thin.icon";

export const CertificateIcon = createIcon("Certificate", {
  bold: CertificateBoldIcon,
  duotone: CertificateDuotoneIcon,
  fill: CertificateFillIcon,
  light: CertificateLightIcon,
  regular: CertificateRegularIcon,
  thin: CertificateThinIcon,
});
