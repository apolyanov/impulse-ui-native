import { createIcon } from "../../hocs/create-icon.hoc";
import { ReceiptBoldIcon } from "../bold/receipt-bold.icon";
import { ReceiptDuotoneIcon } from "../duotone/receipt-duotone.icon";
import { ReceiptFillIcon } from "../fill/receipt-fill.icon";
import { ReceiptLightIcon } from "../light/receipt-light.icon";
import { ReceiptRegularIcon } from "../regular/receipt-regular.icon";
import { ReceiptThinIcon } from "../thin/receipt-thin.icon";

export const ReceiptIcon = createIcon("Receipt", {
  bold: ReceiptBoldIcon,
  duotone: ReceiptDuotoneIcon,
  fill: ReceiptFillIcon,
  light: ReceiptLightIcon,
  regular: ReceiptRegularIcon,
  thin: ReceiptThinIcon,
});
