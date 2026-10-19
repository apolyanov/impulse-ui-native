import { createIcon } from "../../hocs/create-icon.hoc";
import { FlowArrowBoldIcon } from "../bold/flow-arrow-bold.icon";
import { FlowArrowDuotoneIcon } from "../duotone/flow-arrow-duotone.icon";
import { FlowArrowFillIcon } from "../fill/flow-arrow-fill.icon";
import { FlowArrowLightIcon } from "../light/flow-arrow-light.icon";
import { FlowArrowRegularIcon } from "../regular/flow-arrow-regular.icon";
import { FlowArrowThinIcon } from "../thin/flow-arrow-thin.icon";

export const FlowArrowIcon = createIcon("FlowArrow", {
  bold: FlowArrowBoldIcon,
  duotone: FlowArrowDuotoneIcon,
  fill: FlowArrowFillIcon,
  light: FlowArrowLightIcon,
  regular: FlowArrowRegularIcon,
  thin: FlowArrowThinIcon,
});
