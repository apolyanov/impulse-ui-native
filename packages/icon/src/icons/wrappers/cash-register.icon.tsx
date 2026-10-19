import { createIcon } from "../../hocs/create-icon.hoc";
import { CashRegisterBoldIcon } from "../bold/cash-register-bold.icon";
import { CashRegisterDuotoneIcon } from "../duotone/cash-register-duotone.icon";
import { CashRegisterFillIcon } from "../fill/cash-register-fill.icon";
import { CashRegisterLightIcon } from "../light/cash-register-light.icon";
import { CashRegisterRegularIcon } from "../regular/cash-register-regular.icon";
import { CashRegisterThinIcon } from "../thin/cash-register-thin.icon";

export const CashRegisterIcon = createIcon("CashRegister", {
  bold: CashRegisterBoldIcon,
  duotone: CashRegisterDuotoneIcon,
  fill: CashRegisterFillIcon,
  light: CashRegisterLightIcon,
  regular: CashRegisterRegularIcon,
  thin: CashRegisterThinIcon,
});
