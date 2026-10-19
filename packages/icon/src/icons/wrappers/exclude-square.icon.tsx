import { createIcon } from "../../hocs/create-icon.hoc";
import { ExcludeSquareBoldIcon } from "../bold/exclude-square-bold.icon";
import { ExcludeSquareDuotoneIcon } from "../duotone/exclude-square-duotone.icon";
import { ExcludeSquareFillIcon } from "../fill/exclude-square-fill.icon";
import { ExcludeSquareLightIcon } from "../light/exclude-square-light.icon";
import { ExcludeSquareRegularIcon } from "../regular/exclude-square-regular.icon";
import { ExcludeSquareThinIcon } from "../thin/exclude-square-thin.icon";

export const ExcludeSquareIcon = createIcon("ExcludeSquare", {
  bold: ExcludeSquareBoldIcon,
  duotone: ExcludeSquareDuotoneIcon,
  fill: ExcludeSquareFillIcon,
  light: ExcludeSquareLightIcon,
  regular: ExcludeSquareRegularIcon,
  thin: ExcludeSquareThinIcon,
});
