import { createIcon } from "../../hocs/create-icon.hoc";
import { EscalatorUpBoldIcon } from "../bold/escalator-up-bold.icon";
import { EscalatorUpDuotoneIcon } from "../duotone/escalator-up-duotone.icon";
import { EscalatorUpFillIcon } from "../fill/escalator-up-fill.icon";
import { EscalatorUpLightIcon } from "../light/escalator-up-light.icon";
import { EscalatorUpRegularIcon } from "../regular/escalator-up-regular.icon";
import { EscalatorUpThinIcon } from "../thin/escalator-up-thin.icon";

export const EscalatorUpIcon = createIcon("EscalatorUp", {
  bold: EscalatorUpBoldIcon,
  duotone: EscalatorUpDuotoneIcon,
  fill: EscalatorUpFillIcon,
  light: EscalatorUpLightIcon,
  regular: EscalatorUpRegularIcon,
  thin: EscalatorUpThinIcon,
});
