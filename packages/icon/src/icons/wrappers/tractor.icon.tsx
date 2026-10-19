import { createIcon } from "../../hocs/create-icon.hoc";
import { TractorBoldIcon } from "../bold/tractor-bold.icon";
import { TractorDuotoneIcon } from "../duotone/tractor-duotone.icon";
import { TractorFillIcon } from "../fill/tractor-fill.icon";
import { TractorLightIcon } from "../light/tractor-light.icon";
import { TractorRegularIcon } from "../regular/tractor-regular.icon";
import { TractorThinIcon } from "../thin/tractor-thin.icon";

export const TractorIcon = createIcon("Tractor", {
  bold: TractorBoldIcon,
  duotone: TractorDuotoneIcon,
  fill: TractorFillIcon,
  light: TractorLightIcon,
  regular: TractorRegularIcon,
  thin: TractorThinIcon,
});
