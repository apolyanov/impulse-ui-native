import { createIcon } from "../../hocs/create-icon.hoc";
import { BracketsSquareBoldIcon } from "../bold/brackets-square-bold.icon";
import { BracketsSquareDuotoneIcon } from "../duotone/brackets-square-duotone.icon";
import { BracketsSquareFillIcon } from "../fill/brackets-square-fill.icon";
import { BracketsSquareLightIcon } from "../light/brackets-square-light.icon";
import { BracketsSquareRegularIcon } from "../regular/brackets-square-regular.icon";
import { BracketsSquareThinIcon } from "../thin/brackets-square-thin.icon";

export const BracketsSquareIcon = createIcon("BracketsSquare", {
  bold: BracketsSquareBoldIcon,
  duotone: BracketsSquareDuotoneIcon,
  fill: BracketsSquareFillIcon,
  light: BracketsSquareLightIcon,
  regular: BracketsSquareRegularIcon,
  thin: BracketsSquareThinIcon,
});
