import { createIcon } from "../../hocs/create-icon.hoc";
import { CowBoldIcon } from "../bold/cow-bold.icon";
import { CowDuotoneIcon } from "../duotone/cow-duotone.icon";
import { CowFillIcon } from "../fill/cow-fill.icon";
import { CowLightIcon } from "../light/cow-light.icon";
import { CowRegularIcon } from "../regular/cow-regular.icon";
import { CowThinIcon } from "../thin/cow-thin.icon";

export const CowIcon = createIcon("Cow", {
  bold: CowBoldIcon,
  duotone: CowDuotoneIcon,
  fill: CowFillIcon,
  light: CowLightIcon,
  regular: CowRegularIcon,
  thin: CowThinIcon,
});
