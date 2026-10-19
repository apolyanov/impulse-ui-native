import { createIcon } from "../../hocs/create-icon.hoc";
import { BankBoldIcon } from "../bold/bank-bold.icon";
import { BankDuotoneIcon } from "../duotone/bank-duotone.icon";
import { BankFillIcon } from "../fill/bank-fill.icon";
import { BankLightIcon } from "../light/bank-light.icon";
import { BankRegularIcon } from "../regular/bank-regular.icon";
import { BankThinIcon } from "../thin/bank-thin.icon";

export const BankIcon = createIcon("Bank", {
  bold: BankBoldIcon,
  duotone: BankDuotoneIcon,
  fill: BankFillIcon,
  light: BankLightIcon,
  regular: BankRegularIcon,
  thin: BankThinIcon,
});
