import { createIcon } from "../../hocs/create-icon.hoc";
import { ReceiptXBoldIcon } from "../bold/receipt-x-bold.icon";
import { ReceiptXDuotoneIcon } from "../duotone/receipt-x-duotone.icon";
import { ReceiptXFillIcon } from "../fill/receipt-x-fill.icon";
import { ReceiptXLightIcon } from "../light/receipt-x-light.icon";
import { ReceiptXRegularIcon } from "../regular/receipt-x-regular.icon";
import { ReceiptXThinIcon } from "../thin/receipt-x-thin.icon";

export const ReceiptXIcon = createIcon("ReceiptX", {
  bold: ReceiptXBoldIcon,
  duotone: ReceiptXDuotoneIcon,
  fill: ReceiptXFillIcon,
  light: ReceiptXLightIcon,
  regular: ReceiptXRegularIcon,
  thin: ReceiptXThinIcon,
});
