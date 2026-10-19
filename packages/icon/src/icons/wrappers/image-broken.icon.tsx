import { createIcon } from "../../hocs/create-icon.hoc";
import { ImageBrokenBoldIcon } from "../bold/image-broken-bold.icon";
import { ImageBrokenDuotoneIcon } from "../duotone/image-broken-duotone.icon";
import { ImageBrokenFillIcon } from "../fill/image-broken-fill.icon";
import { ImageBrokenLightIcon } from "../light/image-broken-light.icon";
import { ImageBrokenRegularIcon } from "../regular/image-broken-regular.icon";
import { ImageBrokenThinIcon } from "../thin/image-broken-thin.icon";

export const ImageBrokenIcon = createIcon("ImageBroken", {
  bold: ImageBrokenBoldIcon,
  duotone: ImageBrokenDuotoneIcon,
  fill: ImageBrokenFillIcon,
  light: ImageBrokenLightIcon,
  regular: ImageBrokenRegularIcon,
  thin: ImageBrokenThinIcon,
});
