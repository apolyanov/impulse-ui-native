import { createIcon } from "../../hocs/create-icon.hoc";
import { FishSimpleBoldIcon } from "../bold/fish-simple-bold.icon";
import { FishSimpleDuotoneIcon } from "../duotone/fish-simple-duotone.icon";
import { FishSimpleFillIcon } from "../fill/fish-simple-fill.icon";
import { FishSimpleLightIcon } from "../light/fish-simple-light.icon";
import { FishSimpleRegularIcon } from "../regular/fish-simple-regular.icon";
import { FishSimpleThinIcon } from "../thin/fish-simple-thin.icon";

export const FishSimpleIcon = createIcon("FishSimple", {
  bold: FishSimpleBoldIcon,
  duotone: FishSimpleDuotoneIcon,
  fill: FishSimpleFillIcon,
  light: FishSimpleLightIcon,
  regular: FishSimpleRegularIcon,
  thin: FishSimpleThinIcon,
});
