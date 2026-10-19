import { createIcon } from "../../hocs/create-icon.hoc";
import { FlowerBoldIcon } from "../bold/flower-bold.icon";
import { FlowerDuotoneIcon } from "../duotone/flower-duotone.icon";
import { FlowerFillIcon } from "../fill/flower-fill.icon";
import { FlowerLightIcon } from "../light/flower-light.icon";
import { FlowerRegularIcon } from "../regular/flower-regular.icon";
import { FlowerThinIcon } from "../thin/flower-thin.icon";

export const FlowerIcon = createIcon("Flower", {
  bold: FlowerBoldIcon,
  duotone: FlowerDuotoneIcon,
  fill: FlowerFillIcon,
  light: FlowerLightIcon,
  regular: FlowerRegularIcon,
  thin: FlowerThinIcon,
});
