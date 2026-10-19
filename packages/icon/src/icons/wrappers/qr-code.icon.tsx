import { createIcon } from "../../hocs/create-icon.hoc";
import { QrCodeBoldIcon } from "../bold/qr-code-bold.icon";
import { QrCodeDuotoneIcon } from "../duotone/qr-code-duotone.icon";
import { QrCodeFillIcon } from "../fill/qr-code-fill.icon";
import { QrCodeLightIcon } from "../light/qr-code-light.icon";
import { QrCodeRegularIcon } from "../regular/qr-code-regular.icon";
import { QrCodeThinIcon } from "../thin/qr-code-thin.icon";

export const QrCodeIcon = createIcon("QrCode", {
  bold: QrCodeBoldIcon,
  duotone: QrCodeDuotoneIcon,
  fill: QrCodeFillIcon,
  light: QrCodeLightIcon,
  regular: QrCodeRegularIcon,
  thin: QrCodeThinIcon,
});
