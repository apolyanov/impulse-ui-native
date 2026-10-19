import { createIcon } from "../../hocs/create-icon.hoc";
import { PiggyBankBoldIcon } from "../bold/piggy-bank-bold.icon";
import { PiggyBankDuotoneIcon } from "../duotone/piggy-bank-duotone.icon";
import { PiggyBankFillIcon } from "../fill/piggy-bank-fill.icon";
import { PiggyBankLightIcon } from "../light/piggy-bank-light.icon";
import { PiggyBankRegularIcon } from "../regular/piggy-bank-regular.icon";
import { PiggyBankThinIcon } from "../thin/piggy-bank-thin.icon";

export const PiggyBankIcon = createIcon("PiggyBank", {
  bold: PiggyBankBoldIcon,
  duotone: PiggyBankDuotoneIcon,
  fill: PiggyBankFillIcon,
  light: PiggyBankLightIcon,
  regular: PiggyBankRegularIcon,
  thin: PiggyBankThinIcon,
});
