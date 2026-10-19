import { createIcon } from "../../hocs/create-icon.hoc";
import { UniteSquareBoldIcon } from "../bold/unite-square-bold.icon";
import { UniteSquareDuotoneIcon } from "../duotone/unite-square-duotone.icon";
import { UniteSquareFillIcon } from "../fill/unite-square-fill.icon";
import { UniteSquareLightIcon } from "../light/unite-square-light.icon";
import { UniteSquareRegularIcon } from "../regular/unite-square-regular.icon";
import { UniteSquareThinIcon } from "../thin/unite-square-thin.icon";

export const UniteSquareIcon = createIcon("UniteSquare", {
  bold: UniteSquareBoldIcon,
  duotone: UniteSquareDuotoneIcon,
  fill: UniteSquareFillIcon,
  light: UniteSquareLightIcon,
  regular: UniteSquareRegularIcon,
  thin: UniteSquareThinIcon,
});
