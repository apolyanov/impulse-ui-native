import { createIcon } from "../../hocs/create-icon.hoc";
import { PaperPlaneBoldIcon } from "../bold/paper-plane-bold.icon";
import { PaperPlaneDuotoneIcon } from "../duotone/paper-plane-duotone.icon";
import { PaperPlaneFillIcon } from "../fill/paper-plane-fill.icon";
import { PaperPlaneLightIcon } from "../light/paper-plane-light.icon";
import { PaperPlaneRegularIcon } from "../regular/paper-plane-regular.icon";
import { PaperPlaneThinIcon } from "../thin/paper-plane-thin.icon";

export const PaperPlaneIcon = createIcon("PaperPlane", {
  bold: PaperPlaneBoldIcon,
  duotone: PaperPlaneDuotoneIcon,
  fill: PaperPlaneFillIcon,
  light: PaperPlaneLightIcon,
  regular: PaperPlaneRegularIcon,
  thin: PaperPlaneThinIcon,
});
