import { createIcon } from "../../hocs/create-icon.hoc";
import { ImageSquareBoldIcon } from "../bold/image-square-bold.icon";
import { ImageSquareDuotoneIcon } from "../duotone/image-square-duotone.icon";
import { ImageSquareFillIcon } from "../fill/image-square-fill.icon";
import { ImageSquareLightIcon } from "../light/image-square-light.icon";
import { ImageSquareRegularIcon } from "../regular/image-square-regular.icon";
import { ImageSquareThinIcon } from "../thin/image-square-thin.icon";

export const ImageSquareIcon = createIcon("ImageSquare", {
  bold: ImageSquareBoldIcon,
  duotone: ImageSquareDuotoneIcon,
  fill: ImageSquareFillIcon,
  light: ImageSquareLightIcon,
  regular: ImageSquareRegularIcon,
  thin: ImageSquareThinIcon,
});
