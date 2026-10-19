import { createIcon } from "../../hocs/create-icon.hoc";
import { MathOperationsBoldIcon } from "../bold/math-operations-bold.icon";
import { MathOperationsDuotoneIcon } from "../duotone/math-operations-duotone.icon";
import { MathOperationsFillIcon } from "../fill/math-operations-fill.icon";
import { MathOperationsLightIcon } from "../light/math-operations-light.icon";
import { MathOperationsRegularIcon } from "../regular/math-operations-regular.icon";
import { MathOperationsThinIcon } from "../thin/math-operations-thin.icon";

export const MathOperationsIcon = createIcon("MathOperations", {
  bold: MathOperationsBoldIcon,
  duotone: MathOperationsDuotoneIcon,
  fill: MathOperationsFillIcon,
  light: MathOperationsLightIcon,
  regular: MathOperationsRegularIcon,
  thin: MathOperationsThinIcon,
});
