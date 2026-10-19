import { createIcon } from "../../hocs/create-icon.hoc";
import { PipeWrenchBoldIcon } from "../bold/pipe-wrench-bold.icon";
import { PipeWrenchDuotoneIcon } from "../duotone/pipe-wrench-duotone.icon";
import { PipeWrenchFillIcon } from "../fill/pipe-wrench-fill.icon";
import { PipeWrenchLightIcon } from "../light/pipe-wrench-light.icon";
import { PipeWrenchRegularIcon } from "../regular/pipe-wrench-regular.icon";
import { PipeWrenchThinIcon } from "../thin/pipe-wrench-thin.icon";

export const PipeWrenchIcon = createIcon("PipeWrench", {
  bold: PipeWrenchBoldIcon,
  duotone: PipeWrenchDuotoneIcon,
  fill: PipeWrenchFillIcon,
  light: PipeWrenchLightIcon,
  regular: PipeWrenchRegularIcon,
  thin: PipeWrenchThinIcon,
});
