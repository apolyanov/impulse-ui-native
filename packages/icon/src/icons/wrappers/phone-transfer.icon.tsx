import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneTransferBoldIcon } from "../bold/phone-transfer-bold.icon";
import { PhoneTransferDuotoneIcon } from "../duotone/phone-transfer-duotone.icon";
import { PhoneTransferFillIcon } from "../fill/phone-transfer-fill.icon";
import { PhoneTransferLightIcon } from "../light/phone-transfer-light.icon";
import { PhoneTransferRegularIcon } from "../regular/phone-transfer-regular.icon";
import { PhoneTransferThinIcon } from "../thin/phone-transfer-thin.icon";

export const PhoneTransferIcon = createIcon("PhoneTransfer", {
  bold: PhoneTransferBoldIcon,
  duotone: PhoneTransferDuotoneIcon,
  fill: PhoneTransferFillIcon,
  light: PhoneTransferLightIcon,
  regular: PhoneTransferRegularIcon,
  thin: PhoneTransferThinIcon,
});
