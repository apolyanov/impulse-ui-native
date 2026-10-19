import { createIcon } from "../../hocs/create-icon.hoc";
import { HandsClappingBoldIcon } from "../bold/hands-clapping-bold.icon";
import { HandsClappingDuotoneIcon } from "../duotone/hands-clapping-duotone.icon";
import { HandsClappingFillIcon } from "../fill/hands-clapping-fill.icon";
import { HandsClappingLightIcon } from "../light/hands-clapping-light.icon";
import { HandsClappingRegularIcon } from "../regular/hands-clapping-regular.icon";
import { HandsClappingThinIcon } from "../thin/hands-clapping-thin.icon";

export const HandsClappingIcon = createIcon("HandsClapping", {
  bold: HandsClappingBoldIcon,
  duotone: HandsClappingDuotoneIcon,
  fill: HandsClappingFillIcon,
  light: HandsClappingLightIcon,
  regular: HandsClappingRegularIcon,
  thin: HandsClappingThinIcon,
});
