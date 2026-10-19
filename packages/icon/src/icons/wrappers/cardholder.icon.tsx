import { createIcon } from "../../hocs/create-icon.hoc";
import { CardholderBoldIcon } from "../bold/cardholder-bold.icon";
import { CardholderDuotoneIcon } from "../duotone/cardholder-duotone.icon";
import { CardholderFillIcon } from "../fill/cardholder-fill.icon";
import { CardholderLightIcon } from "../light/cardholder-light.icon";
import { CardholderRegularIcon } from "../regular/cardholder-regular.icon";
import { CardholderThinIcon } from "../thin/cardholder-thin.icon";

export const CardholderIcon = createIcon("Cardholder", {
  bold: CardholderBoldIcon,
  duotone: CardholderDuotoneIcon,
  fill: CardholderFillIcon,
  light: CardholderLightIcon,
  regular: CardholderRegularIcon,
  thin: CardholderThinIcon,
});
