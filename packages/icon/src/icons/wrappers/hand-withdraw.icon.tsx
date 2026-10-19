import { createIcon } from "../../hocs/create-icon.hoc";
import { HandWithdrawBoldIcon } from "../bold/hand-withdraw-bold.icon";
import { HandWithdrawDuotoneIcon } from "../duotone/hand-withdraw-duotone.icon";
import { HandWithdrawFillIcon } from "../fill/hand-withdraw-fill.icon";
import { HandWithdrawLightIcon } from "../light/hand-withdraw-light.icon";
import { HandWithdrawRegularIcon } from "../regular/hand-withdraw-regular.icon";
import { HandWithdrawThinIcon } from "../thin/hand-withdraw-thin.icon";

export const HandWithdrawIcon = createIcon("HandWithdraw", {
  bold: HandWithdrawBoldIcon,
  duotone: HandWithdrawDuotoneIcon,
  fill: HandWithdrawFillIcon,
  light: HandWithdrawLightIcon,
  regular: HandWithdrawRegularIcon,
  thin: HandWithdrawThinIcon,
});
