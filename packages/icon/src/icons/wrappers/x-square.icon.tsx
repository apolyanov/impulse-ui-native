import { createIcon } from "../../hocs/create-icon.hoc";
import { XSquareBoldIcon } from "../bold/x-square-bold.icon";
import { XSquareDuotoneIcon } from "../duotone/x-square-duotone.icon";
import { XSquareFillIcon } from "../fill/x-square-fill.icon";
import { XSquareLightIcon } from "../light/x-square-light.icon";
import { XSquareRegularIcon } from "../regular/x-square-regular.icon";
import { XSquareThinIcon } from "../thin/x-square-thin.icon";

export const XSquareIcon = createIcon("XSquare", {
  bold: XSquareBoldIcon,
  duotone: XSquareDuotoneIcon,
  fill: XSquareFillIcon,
  light: XSquareLightIcon,
  regular: XSquareRegularIcon,
  thin: XSquareThinIcon,
});
