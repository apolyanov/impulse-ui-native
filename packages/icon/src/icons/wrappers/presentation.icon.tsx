import { createIcon } from "../../hocs/create-icon.hoc";
import { PresentationBoldIcon } from "../bold/presentation-bold.icon";
import { PresentationDuotoneIcon } from "../duotone/presentation-duotone.icon";
import { PresentationFillIcon } from "../fill/presentation-fill.icon";
import { PresentationLightIcon } from "../light/presentation-light.icon";
import { PresentationRegularIcon } from "../regular/presentation-regular.icon";
import { PresentationThinIcon } from "../thin/presentation-thin.icon";

export const PresentationIcon = createIcon("Presentation", {
  bold: PresentationBoldIcon,
  duotone: PresentationDuotoneIcon,
  fill: PresentationFillIcon,
  light: PresentationLightIcon,
  regular: PresentationRegularIcon,
  thin: PresentationThinIcon,
});
