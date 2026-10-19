import { createIcon } from "../../hocs/create-icon.hoc";
import { SlidersBoldIcon } from "../bold/sliders-bold.icon";
import { SlidersDuotoneIcon } from "../duotone/sliders-duotone.icon";
import { SlidersFillIcon } from "../fill/sliders-fill.icon";
import { SlidersLightIcon } from "../light/sliders-light.icon";
import { SlidersRegularIcon } from "../regular/sliders-regular.icon";
import { SlidersThinIcon } from "../thin/sliders-thin.icon";

export const SlidersIcon = createIcon("Sliders", {
  bold: SlidersBoldIcon,
  duotone: SlidersDuotoneIcon,
  fill: SlidersFillIcon,
  light: SlidersLightIcon,
  regular: SlidersRegularIcon,
  thin: SlidersThinIcon,
});
