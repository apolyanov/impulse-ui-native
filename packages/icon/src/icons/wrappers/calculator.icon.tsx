import { createIcon } from "../../hocs/create-icon.hoc";
import { CalculatorBoldIcon } from "../bold/calculator-bold.icon";
import { CalculatorDuotoneIcon } from "../duotone/calculator-duotone.icon";
import { CalculatorFillIcon } from "../fill/calculator-fill.icon";
import { CalculatorLightIcon } from "../light/calculator-light.icon";
import { CalculatorRegularIcon } from "../regular/calculator-regular.icon";
import { CalculatorThinIcon } from "../thin/calculator-thin.icon";

export const CalculatorIcon = createIcon("Calculator", {
  bold: CalculatorBoldIcon,
  duotone: CalculatorDuotoneIcon,
  fill: CalculatorFillIcon,
  light: CalculatorLightIcon,
  regular: CalculatorRegularIcon,
  thin: CalculatorThinIcon,
});
