import { createIcon } from "../../hocs/create-icon.hoc";
import { PipeBoldIcon } from "../bold/pipe-bold.icon";
import { PipeDuotoneIcon } from "../duotone/pipe-duotone.icon";
import { PipeFillIcon } from "../fill/pipe-fill.icon";
import { PipeLightIcon } from "../light/pipe-light.icon";
import { PipeRegularIcon } from "../regular/pipe-regular.icon";
import { PipeThinIcon } from "../thin/pipe-thin.icon";

export const PipeIcon = createIcon("Pipe", {
  bold: PipeBoldIcon,
  duotone: PipeDuotoneIcon,
  fill: PipeFillIcon,
  light: PipeLightIcon,
  regular: PipeRegularIcon,
  thin: PipeThinIcon,
});
