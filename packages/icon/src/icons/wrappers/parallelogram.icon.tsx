import { createIcon } from "../../hocs/create-icon.hoc";
import { ParallelogramBoldIcon } from "../bold/parallelogram-bold.icon";
import { ParallelogramDuotoneIcon } from "../duotone/parallelogram-duotone.icon";
import { ParallelogramFillIcon } from "../fill/parallelogram-fill.icon";
import { ParallelogramLightIcon } from "../light/parallelogram-light.icon";
import { ParallelogramRegularIcon } from "../regular/parallelogram-regular.icon";
import { ParallelogramThinIcon } from "../thin/parallelogram-thin.icon";

export const ParallelogramIcon = createIcon("Parallelogram", {
  bold: ParallelogramBoldIcon,
  duotone: ParallelogramDuotoneIcon,
  fill: ParallelogramFillIcon,
  light: ParallelogramLightIcon,
  regular: ParallelogramRegularIcon,
  thin: ParallelogramThinIcon,
});
