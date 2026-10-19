import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckSquareBoldIcon } from "../bold/check-square-bold.icon";
import { CheckSquareDuotoneIcon } from "../duotone/check-square-duotone.icon";
import { CheckSquareFillIcon } from "../fill/check-square-fill.icon";
import { CheckSquareLightIcon } from "../light/check-square-light.icon";
import { CheckSquareRegularIcon } from "../regular/check-square-regular.icon";
import { CheckSquareThinIcon } from "../thin/check-square-thin.icon";

export const CheckSquareIcon = createIcon("CheckSquare", {
  bold: CheckSquareBoldIcon,
  duotone: CheckSquareDuotoneIcon,
  fill: CheckSquareFillIcon,
  light: CheckSquareLightIcon,
  regular: CheckSquareRegularIcon,
  thin: CheckSquareThinIcon,
});
