import { createIcon } from "../../hocs/create-icon.hoc";
import { TrainRegionalBoldIcon } from "../bold/train-regional-bold.icon";
import { TrainRegionalDuotoneIcon } from "../duotone/train-regional-duotone.icon";
import { TrainRegionalFillIcon } from "../fill/train-regional-fill.icon";
import { TrainRegionalLightIcon } from "../light/train-regional-light.icon";
import { TrainRegionalRegularIcon } from "../regular/train-regional-regular.icon";
import { TrainRegionalThinIcon } from "../thin/train-regional-thin.icon";

export const TrainRegionalIcon = createIcon("TrainRegional", {
  bold: TrainRegionalBoldIcon,
  duotone: TrainRegionalDuotoneIcon,
  fill: TrainRegionalFillIcon,
  light: TrainRegionalLightIcon,
  regular: TrainRegionalRegularIcon,
  thin: TrainRegionalThinIcon,
});
