import { createIcon } from "../../hocs/create-icon.hoc";
import { BarcodeBoldIcon } from "../bold/barcode-bold.icon";
import { BarcodeDuotoneIcon } from "../duotone/barcode-duotone.icon";
import { BarcodeFillIcon } from "../fill/barcode-fill.icon";
import { BarcodeLightIcon } from "../light/barcode-light.icon";
import { BarcodeRegularIcon } from "../regular/barcode-regular.icon";
import { BarcodeThinIcon } from "../thin/barcode-thin.icon";

export const BarcodeIcon = createIcon("Barcode", {
  bold: BarcodeBoldIcon,
  duotone: BarcodeDuotoneIcon,
  fill: BarcodeFillIcon,
  light: BarcodeLightIcon,
  regular: BarcodeRegularIcon,
  thin: BarcodeThinIcon,
});
