import { createIcon } from "../../hocs/create-icon.hoc";
import { MoneyBoldIcon } from "../bold/money-bold.icon";
import { MoneyDuotoneIcon } from "../duotone/money-duotone.icon";
import { MoneyFillIcon } from "../fill/money-fill.icon";
import { MoneyLightIcon } from "../light/money-light.icon";
import { MoneyRegularIcon } from "../regular/money-regular.icon";
import { MoneyThinIcon } from "../thin/money-thin.icon";

export const MoneyIcon = createIcon("Money", {
  bold: MoneyBoldIcon,
  duotone: MoneyDuotoneIcon,
  fill: MoneyFillIcon,
  light: MoneyLightIcon,
  regular: MoneyRegularIcon,
  thin: MoneyThinIcon,
});
