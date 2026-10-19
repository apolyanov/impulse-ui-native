import { createIcon } from "../../hocs/create-icon.hoc";
import { ForkKnifeBoldIcon } from "../bold/fork-knife-bold.icon";
import { ForkKnifeDuotoneIcon } from "../duotone/fork-knife-duotone.icon";
import { ForkKnifeFillIcon } from "../fill/fork-knife-fill.icon";
import { ForkKnifeLightIcon } from "../light/fork-knife-light.icon";
import { ForkKnifeRegularIcon } from "../regular/fork-knife-regular.icon";
import { ForkKnifeThinIcon } from "../thin/fork-knife-thin.icon";

export const ForkKnifeIcon = createIcon("ForkKnife", {
  bold: ForkKnifeBoldIcon,
  duotone: ForkKnifeDuotoneIcon,
  fill: ForkKnifeFillIcon,
  light: ForkKnifeLightIcon,
  regular: ForkKnifeRegularIcon,
  thin: ForkKnifeThinIcon,
});
