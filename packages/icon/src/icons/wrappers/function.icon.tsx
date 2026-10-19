import { createIcon } from "../../hocs/create-icon.hoc";
import { FunctionBoldIcon } from "../bold/function-bold.icon";
import { FunctionDuotoneIcon } from "../duotone/function-duotone.icon";
import { FunctionFillIcon } from "../fill/function-fill.icon";
import { FunctionLightIcon } from "../light/function-light.icon";
import { FunctionRegularIcon } from "../regular/function-regular.icon";
import { FunctionThinIcon } from "../thin/function-thin.icon";

export const FunctionIcon = createIcon("Function", {
  bold: FunctionBoldIcon,
  duotone: FunctionDuotoneIcon,
  fill: FunctionFillIcon,
  light: FunctionLightIcon,
  regular: FunctionRegularIcon,
  thin: FunctionThinIcon,
});
