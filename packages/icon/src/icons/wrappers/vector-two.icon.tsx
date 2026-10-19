import { createIcon } from "../../hocs/create-icon.hoc";
import { VectorTwoBoldIcon } from "../bold/vector-two-bold.icon";
import { VectorTwoDuotoneIcon } from "../duotone/vector-two-duotone.icon";
import { VectorTwoFillIcon } from "../fill/vector-two-fill.icon";
import { VectorTwoLightIcon } from "../light/vector-two-light.icon";
import { VectorTwoRegularIcon } from "../regular/vector-two-regular.icon";
import { VectorTwoThinIcon } from "../thin/vector-two-thin.icon";

export const VectorTwoIcon = createIcon("VectorTwo", {
  bold: VectorTwoBoldIcon,
  duotone: VectorTwoDuotoneIcon,
  fill: VectorTwoFillIcon,
  light: VectorTwoLightIcon,
  regular: VectorTwoRegularIcon,
  thin: VectorTwoThinIcon,
});
