import { createIcon } from "../../hocs/create-icon.hoc";
import { SlideshowBoldIcon } from "../bold/slideshow-bold.icon";
import { SlideshowDuotoneIcon } from "../duotone/slideshow-duotone.icon";
import { SlideshowFillIcon } from "../fill/slideshow-fill.icon";
import { SlideshowLightIcon } from "../light/slideshow-light.icon";
import { SlideshowRegularIcon } from "../regular/slideshow-regular.icon";
import { SlideshowThinIcon } from "../thin/slideshow-thin.icon";

export const SlideshowIcon = createIcon("Slideshow", {
  bold: SlideshowBoldIcon,
  duotone: SlideshowDuotoneIcon,
  fill: SlideshowFillIcon,
  light: SlideshowLightIcon,
  regular: SlideshowRegularIcon,
  thin: SlideshowThinIcon,
});
