import { createIcon } from "../../hocs/create-icon.hoc";
import { DivideBoldIcon } from "../bold/divide-bold.icon";
import { DivideDuotoneIcon } from "../duotone/divide-duotone.icon";
import { DivideFillIcon } from "../fill/divide-fill.icon";
import { DivideLightIcon } from "../light/divide-light.icon";
import { DivideRegularIcon } from "../regular/divide-regular.icon";
import { DivideThinIcon } from "../thin/divide-thin.icon";

export const DivideIcon = createIcon("Divide", {
  bold: DivideBoldIcon,
  duotone: DivideDuotoneIcon,
  fill: DivideFillIcon,
  light: DivideLightIcon,
  regular: DivideRegularIcon,
  thin: DivideThinIcon,
});
