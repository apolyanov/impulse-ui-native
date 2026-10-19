import { createIcon } from "../../hocs/create-icon.hoc";
import { LaptopBoldIcon } from "../bold/laptop-bold.icon";
import { LaptopDuotoneIcon } from "../duotone/laptop-duotone.icon";
import { LaptopFillIcon } from "../fill/laptop-fill.icon";
import { LaptopLightIcon } from "../light/laptop-light.icon";
import { LaptopRegularIcon } from "../regular/laptop-regular.icon";
import { LaptopThinIcon } from "../thin/laptop-thin.icon";

export const LaptopIcon = createIcon("Laptop", {
  bold: LaptopBoldIcon,
  duotone: LaptopDuotoneIcon,
  fill: LaptopFillIcon,
  light: LaptopLightIcon,
  regular: LaptopRegularIcon,
  thin: LaptopThinIcon,
});
