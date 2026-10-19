import { createIcon } from "../../hocs/create-icon.hoc";
import { MinusSquareBoldIcon } from "../bold/minus-square-bold.icon";
import { MinusSquareDuotoneIcon } from "../duotone/minus-square-duotone.icon";
import { MinusSquareFillIcon } from "../fill/minus-square-fill.icon";
import { MinusSquareLightIcon } from "../light/minus-square-light.icon";
import { MinusSquareRegularIcon } from "../regular/minus-square-regular.icon";
import { MinusSquareThinIcon } from "../thin/minus-square-thin.icon";

export const MinusSquareIcon = createIcon("MinusSquare", {
  bold: MinusSquareBoldIcon,
  duotone: MinusSquareDuotoneIcon,
  fill: MinusSquareFillIcon,
  light: MinusSquareLightIcon,
  regular: MinusSquareRegularIcon,
  thin: MinusSquareThinIcon,
});
