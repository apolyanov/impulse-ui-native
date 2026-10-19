import { createIcon } from "../../hocs/create-icon.hoc";
import { ImageBoldIcon } from "../bold/image-bold.icon";
import { ImageDuotoneIcon } from "../duotone/image-duotone.icon";
import { ImageFillIcon } from "../fill/image-fill.icon";
import { ImageLightIcon } from "../light/image-light.icon";
import { ImageRegularIcon } from "../regular/image-regular.icon";
import { ImageThinIcon } from "../thin/image-thin.icon";

export const ImageIcon = createIcon("Image", {
  bold: ImageBoldIcon,
  duotone: ImageDuotoneIcon,
  fill: ImageFillIcon,
  light: ImageLightIcon,
  regular: ImageRegularIcon,
  thin: ImageThinIcon,
});
