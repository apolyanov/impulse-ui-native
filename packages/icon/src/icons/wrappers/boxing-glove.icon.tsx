import { createIcon } from "../../hocs/create-icon.hoc";
import { BoxingGloveBoldIcon } from "../bold/boxing-glove-bold.icon";
import { BoxingGloveDuotoneIcon } from "../duotone/boxing-glove-duotone.icon";
import { BoxingGloveFillIcon } from "../fill/boxing-glove-fill.icon";
import { BoxingGloveLightIcon } from "../light/boxing-glove-light.icon";
import { BoxingGloveRegularIcon } from "../regular/boxing-glove-regular.icon";
import { BoxingGloveThinIcon } from "../thin/boxing-glove-thin.icon";

export const BoxingGloveIcon = createIcon("BoxingGlove", {
  bold: BoxingGloveBoldIcon,
  duotone: BoxingGloveDuotoneIcon,
  fill: BoxingGloveFillIcon,
  light: BoxingGloveLightIcon,
  regular: BoxingGloveRegularIcon,
  thin: BoxingGloveThinIcon,
});
