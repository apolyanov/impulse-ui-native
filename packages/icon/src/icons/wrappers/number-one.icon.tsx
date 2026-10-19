import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberOneBoldIcon } from "../bold/number-one-bold.icon";
import { NumberOneDuotoneIcon } from "../duotone/number-one-duotone.icon";
import { NumberOneFillIcon } from "../fill/number-one-fill.icon";
import { NumberOneLightIcon } from "../light/number-one-light.icon";
import { NumberOneRegularIcon } from "../regular/number-one-regular.icon";
import { NumberOneThinIcon } from "../thin/number-one-thin.icon";

export const NumberOneIcon = createIcon("NumberOne", {
  bold: NumberOneBoldIcon,
  duotone: NumberOneDuotoneIcon,
  fill: NumberOneFillIcon,
  light: NumberOneLightIcon,
  regular: NumberOneRegularIcon,
  thin: NumberOneThinIcon,
});
