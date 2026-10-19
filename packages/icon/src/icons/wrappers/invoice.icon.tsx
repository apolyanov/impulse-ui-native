import { createIcon } from "../../hocs/create-icon.hoc";
import { InvoiceBoldIcon } from "../bold/invoice-bold.icon";
import { InvoiceDuotoneIcon } from "../duotone/invoice-duotone.icon";
import { InvoiceFillIcon } from "../fill/invoice-fill.icon";
import { InvoiceLightIcon } from "../light/invoice-light.icon";
import { InvoiceRegularIcon } from "../regular/invoice-regular.icon";
import { InvoiceThinIcon } from "../thin/invoice-thin.icon";

export const InvoiceIcon = createIcon("Invoice", {
  bold: InvoiceBoldIcon,
  duotone: InvoiceDuotoneIcon,
  fill: InvoiceFillIcon,
  light: InvoiceLightIcon,
  regular: InvoiceRegularIcon,
  thin: InvoiceThinIcon,
});
