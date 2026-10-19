import { createIcon } from "../../hocs/create-icon.hoc";
import { StepsBoldIcon } from "../bold/steps-bold.icon";
import { StepsDuotoneIcon } from "../duotone/steps-duotone.icon";
import { StepsFillIcon } from "../fill/steps-fill.icon";
import { StepsLightIcon } from "../light/steps-light.icon";
import { StepsRegularIcon } from "../regular/steps-regular.icon";
import { StepsThinIcon } from "../thin/steps-thin.icon";

export const StepsIcon = createIcon("Steps", {
  bold: StepsBoldIcon,
  duotone: StepsDuotoneIcon,
  fill: StepsFillIcon,
  light: StepsLightIcon,
  regular: StepsRegularIcon,
  thin: StepsThinIcon,
});
