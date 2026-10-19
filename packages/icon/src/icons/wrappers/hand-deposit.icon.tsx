import { createIcon } from "../../hocs/create-icon.hoc";
import { HandDepositBoldIcon } from "../bold/hand-deposit-bold.icon";
import { HandDepositDuotoneIcon } from "../duotone/hand-deposit-duotone.icon";
import { HandDepositFillIcon } from "../fill/hand-deposit-fill.icon";
import { HandDepositLightIcon } from "../light/hand-deposit-light.icon";
import { HandDepositRegularIcon } from "../regular/hand-deposit-regular.icon";
import { HandDepositThinIcon } from "../thin/hand-deposit-thin.icon";

export const HandDepositIcon = createIcon("HandDeposit", {
  bold: HandDepositBoldIcon,
  duotone: HandDepositDuotoneIcon,
  fill: HandDepositFillIcon,
  light: HandDepositLightIcon,
  regular: HandDepositRegularIcon,
  thin: HandDepositThinIcon,
});
