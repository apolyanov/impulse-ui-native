import { createIcon } from "../../hocs/create-icon.hoc";
import { BinaryBoldIcon } from "../bold/binary-bold.icon";
import { BinaryDuotoneIcon } from "../duotone/binary-duotone.icon";
import { BinaryFillIcon } from "../fill/binary-fill.icon";
import { BinaryLightIcon } from "../light/binary-light.icon";
import { BinaryRegularIcon } from "../regular/binary-regular.icon";
import { BinaryThinIcon } from "../thin/binary-thin.icon";

export const BinaryIcon = createIcon("Binary", {
  bold: BinaryBoldIcon,
  duotone: BinaryDuotoneIcon,
  fill: BinaryFillIcon,
  light: BinaryLightIcon,
  regular: BinaryRegularIcon,
  thin: BinaryThinIcon,
});
