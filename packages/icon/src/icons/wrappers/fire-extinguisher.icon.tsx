import { createIcon } from "../../hocs/create-icon.hoc";
import { FireExtinguisherBoldIcon } from "../bold/fire-extinguisher-bold.icon";
import { FireExtinguisherDuotoneIcon } from "../duotone/fire-extinguisher-duotone.icon";
import { FireExtinguisherFillIcon } from "../fill/fire-extinguisher-fill.icon";
import { FireExtinguisherLightIcon } from "../light/fire-extinguisher-light.icon";
import { FireExtinguisherRegularIcon } from "../regular/fire-extinguisher-regular.icon";
import { FireExtinguisherThinIcon } from "../thin/fire-extinguisher-thin.icon";

export const FireExtinguisherIcon = createIcon("FireExtinguisher", {
  bold: FireExtinguisherBoldIcon,
  duotone: FireExtinguisherDuotoneIcon,
  fill: FireExtinguisherFillIcon,
  light: FireExtinguisherLightIcon,
  regular: FireExtinguisherRegularIcon,
  thin: FireExtinguisherThinIcon,
});
