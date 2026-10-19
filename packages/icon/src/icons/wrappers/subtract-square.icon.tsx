import { createIcon } from "../../hocs/create-icon.hoc";
import { SubtractSquareBoldIcon } from "../bold/subtract-square-bold.icon";
import { SubtractSquareDuotoneIcon } from "../duotone/subtract-square-duotone.icon";
import { SubtractSquareFillIcon } from "../fill/subtract-square-fill.icon";
import { SubtractSquareLightIcon } from "../light/subtract-square-light.icon";
import { SubtractSquareRegularIcon } from "../regular/subtract-square-regular.icon";
import { SubtractSquareThinIcon } from "../thin/subtract-square-thin.icon";

export const SubtractSquareIcon = createIcon("SubtractSquare", {
  bold: SubtractSquareBoldIcon,
  duotone: SubtractSquareDuotoneIcon,
  fill: SubtractSquareFillIcon,
  light: SubtractSquareLightIcon,
  regular: SubtractSquareRegularIcon,
  thin: SubtractSquareThinIcon,
});
