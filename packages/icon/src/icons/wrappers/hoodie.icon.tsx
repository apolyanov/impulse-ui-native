import { createIcon } from "../../hocs/create-icon.hoc";
import { HoodieBoldIcon } from "../bold/hoodie-bold.icon";
import { HoodieDuotoneIcon } from "../duotone/hoodie-duotone.icon";
import { HoodieFillIcon } from "../fill/hoodie-fill.icon";
import { HoodieLightIcon } from "../light/hoodie-light.icon";
import { HoodieRegularIcon } from "../regular/hoodie-regular.icon";
import { HoodieThinIcon } from "../thin/hoodie-thin.icon";

export const HoodieIcon = createIcon("Hoodie", {
  bold: HoodieBoldIcon,
  duotone: HoodieDuotoneIcon,
  fill: HoodieFillIcon,
  light: HoodieLightIcon,
  regular: HoodieRegularIcon,
  thin: HoodieThinIcon,
});
