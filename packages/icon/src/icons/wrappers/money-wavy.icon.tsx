import { createIcon } from "../../hocs/create-icon.hoc";
import { MoneyWavyBoldIcon } from "../bold/money-wavy-bold.icon";
import { MoneyWavyDuotoneIcon } from "../duotone/money-wavy-duotone.icon";
import { MoneyWavyFillIcon } from "../fill/money-wavy-fill.icon";
import { MoneyWavyLightIcon } from "../light/money-wavy-light.icon";
import { MoneyWavyRegularIcon } from "../regular/money-wavy-regular.icon";
import { MoneyWavyThinIcon } from "../thin/money-wavy-thin.icon";

export const MoneyWavyIcon = createIcon("MoneyWavy", {
  bold: MoneyWavyBoldIcon,
  duotone: MoneyWavyDuotoneIcon,
  fill: MoneyWavyFillIcon,
  light: MoneyWavyLightIcon,
  regular: MoneyWavyRegularIcon,
  thin: MoneyWavyThinIcon,
});
