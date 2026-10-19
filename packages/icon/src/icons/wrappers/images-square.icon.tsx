import { createIcon } from "../../hocs/create-icon.hoc";
import { ImagesSquareBoldIcon } from "../bold/images-square-bold.icon";
import { ImagesSquareDuotoneIcon } from "../duotone/images-square-duotone.icon";
import { ImagesSquareFillIcon } from "../fill/images-square-fill.icon";
import { ImagesSquareLightIcon } from "../light/images-square-light.icon";
import { ImagesSquareRegularIcon } from "../regular/images-square-regular.icon";
import { ImagesSquareThinIcon } from "../thin/images-square-thin.icon";

export const ImagesSquareIcon = createIcon("ImagesSquare", {
  bold: ImagesSquareBoldIcon,
  duotone: ImagesSquareDuotoneIcon,
  fill: ImagesSquareFillIcon,
  light: ImagesSquareLightIcon,
  regular: ImagesSquareRegularIcon,
  thin: ImagesSquareThinIcon,
});
