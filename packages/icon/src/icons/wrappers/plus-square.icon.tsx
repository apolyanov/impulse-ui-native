import { createIcon } from "../../hocs/create-icon.hoc";
import { PlusSquareBoldIcon } from "../bold/plus-square-bold.icon";
import { PlusSquareDuotoneIcon } from "../duotone/plus-square-duotone.icon";
import { PlusSquareFillIcon } from "../fill/plus-square-fill.icon";
import { PlusSquareLightIcon } from "../light/plus-square-light.icon";
import { PlusSquareRegularIcon } from "../regular/plus-square-regular.icon";
import { PlusSquareThinIcon } from "../thin/plus-square-thin.icon";

export const PlusSquareIcon = createIcon("PlusSquare", {
  bold: PlusSquareBoldIcon,
  duotone: PlusSquareDuotoneIcon,
  fill: PlusSquareFillIcon,
  light: PlusSquareLightIcon,
  regular: PlusSquareRegularIcon,
  thin: PlusSquareThinIcon,
});
