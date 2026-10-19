import { createIcon } from "../../hocs/create-icon.hoc";
import { KnifeBoldIcon } from "../bold/knife-bold.icon";
import { KnifeDuotoneIcon } from "../duotone/knife-duotone.icon";
import { KnifeFillIcon } from "../fill/knife-fill.icon";
import { KnifeLightIcon } from "../light/knife-light.icon";
import { KnifeRegularIcon } from "../regular/knife-regular.icon";
import { KnifeThinIcon } from "../thin/knife-thin.icon";

export const KnifeIcon = createIcon("Knife", {
  bold: KnifeBoldIcon,
  duotone: KnifeDuotoneIcon,
  fill: KnifeFillIcon,
  light: KnifeLightIcon,
  regular: KnifeRegularIcon,
  thin: KnifeThinIcon,
});
