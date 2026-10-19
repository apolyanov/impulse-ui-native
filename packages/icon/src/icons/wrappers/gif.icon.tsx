import { createIcon } from "../../hocs/create-icon.hoc";
import { GifBoldIcon } from "../bold/gif-bold.icon";
import { GifDuotoneIcon } from "../duotone/gif-duotone.icon";
import { GifFillIcon } from "../fill/gif-fill.icon";
import { GifLightIcon } from "../light/gif-light.icon";
import { GifRegularIcon } from "../regular/gif-regular.icon";
import { GifThinIcon } from "../thin/gif-thin.icon";

export const GifIcon = createIcon("Gif", {
  bold: GifBoldIcon,
  duotone: GifDuotoneIcon,
  fill: GifFillIcon,
  light: GifLightIcon,
  regular: GifRegularIcon,
  thin: GifThinIcon,
});
