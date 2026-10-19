import { createIcon } from "../../hocs/create-icon.hoc";
import { MountainsBoldIcon } from "../bold/mountains-bold.icon";
import { MountainsDuotoneIcon } from "../duotone/mountains-duotone.icon";
import { MountainsFillIcon } from "../fill/mountains-fill.icon";
import { MountainsLightIcon } from "../light/mountains-light.icon";
import { MountainsRegularIcon } from "../regular/mountains-regular.icon";
import { MountainsThinIcon } from "../thin/mountains-thin.icon";

export const MountainsIcon = createIcon("Mountains", {
  bold: MountainsBoldIcon,
  duotone: MountainsDuotoneIcon,
  fill: MountainsFillIcon,
  light: MountainsLightIcon,
  regular: MountainsRegularIcon,
  thin: MountainsThinIcon,
});
