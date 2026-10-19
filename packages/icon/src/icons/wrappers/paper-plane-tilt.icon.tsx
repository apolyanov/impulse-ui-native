import { createIcon } from "../../hocs/create-icon.hoc";
import { PaperPlaneTiltBoldIcon } from "../bold/paper-plane-tilt-bold.icon";
import { PaperPlaneTiltDuotoneIcon } from "../duotone/paper-plane-tilt-duotone.icon";
import { PaperPlaneTiltFillIcon } from "../fill/paper-plane-tilt-fill.icon";
import { PaperPlaneTiltLightIcon } from "../light/paper-plane-tilt-light.icon";
import { PaperPlaneTiltRegularIcon } from "../regular/paper-plane-tilt-regular.icon";
import { PaperPlaneTiltThinIcon } from "../thin/paper-plane-tilt-thin.icon";

export const PaperPlaneTiltIcon = createIcon("PaperPlaneTilt", {
  bold: PaperPlaneTiltBoldIcon,
  duotone: PaperPlaneTiltDuotoneIcon,
  fill: PaperPlaneTiltFillIcon,
  light: PaperPlaneTiltLightIcon,
  regular: PaperPlaneTiltRegularIcon,
  thin: PaperPlaneTiltThinIcon,
});
