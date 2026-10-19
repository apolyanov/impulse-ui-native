import { createIcon } from "../../hocs/create-icon.hoc";
import { BathtubBoldIcon } from "../bold/bathtub-bold.icon";
import { BathtubDuotoneIcon } from "../duotone/bathtub-duotone.icon";
import { BathtubFillIcon } from "../fill/bathtub-fill.icon";
import { BathtubLightIcon } from "../light/bathtub-light.icon";
import { BathtubRegularIcon } from "../regular/bathtub-regular.icon";
import { BathtubThinIcon } from "../thin/bathtub-thin.icon";

export const BathtubIcon = createIcon("Bathtub", {
  bold: BathtubBoldIcon,
  duotone: BathtubDuotoneIcon,
  fill: BathtubFillIcon,
  light: BathtubLightIcon,
  regular: BathtubRegularIcon,
  thin: BathtubThinIcon,
});
