import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareBoldIcon } from "../bold/square-bold.icon";
import { SquareDuotoneIcon } from "../duotone/square-duotone.icon";
import { SquareFillIcon } from "../fill/square-fill.icon";
import { SquareLightIcon } from "../light/square-light.icon";
import { SquareRegularIcon } from "../regular/square-regular.icon";
import { SquareThinIcon } from "../thin/square-thin.icon";

export const SquareIcon = createIcon("Square", {
  bold: SquareBoldIcon,
  duotone: SquareDuotoneIcon,
  fill: SquareFillIcon,
  light: SquareLightIcon,
  regular: SquareRegularIcon,
  thin: SquareThinIcon,
});
