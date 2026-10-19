import { createIcon } from "../../hocs/create-icon.hoc";
import { FishBoldIcon } from "../bold/fish-bold.icon";
import { FishDuotoneIcon } from "../duotone/fish-duotone.icon";
import { FishFillIcon } from "../fill/fish-fill.icon";
import { FishLightIcon } from "../light/fish-light.icon";
import { FishRegularIcon } from "../regular/fish-regular.icon";
import { FishThinIcon } from "../thin/fish-thin.icon";

export const FishIcon = createIcon("Fish", {
  bold: FishBoldIcon,
  duotone: FishDuotoneIcon,
  fill: FishFillIcon,
  light: FishLightIcon,
  regular: FishRegularIcon,
  thin: FishThinIcon,
});
