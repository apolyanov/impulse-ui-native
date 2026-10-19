import { createIcon } from "../../hocs/create-icon.hoc";
import { ImagesBoldIcon } from "../bold/images-bold.icon";
import { ImagesDuotoneIcon } from "../duotone/images-duotone.icon";
import { ImagesFillIcon } from "../fill/images-fill.icon";
import { ImagesLightIcon } from "../light/images-light.icon";
import { ImagesRegularIcon } from "../regular/images-regular.icon";
import { ImagesThinIcon } from "../thin/images-thin.icon";

export const ImagesIcon = createIcon("Images", {
  bold: ImagesBoldIcon,
  duotone: ImagesDuotoneIcon,
  fill: ImagesFillIcon,
  light: ImagesLightIcon,
  regular: ImagesRegularIcon,
  thin: ImagesThinIcon,
});
