import { createIcon } from "../../hocs/create-icon.hoc";
import { TrainBoldIcon } from "../bold/train-bold.icon";
import { TrainDuotoneIcon } from "../duotone/train-duotone.icon";
import { TrainFillIcon } from "../fill/train-fill.icon";
import { TrainLightIcon } from "../light/train-light.icon";
import { TrainRegularIcon } from "../regular/train-regular.icon";
import { TrainThinIcon } from "../thin/train-thin.icon";

export const TrainIcon = createIcon("Train", {
  bold: TrainBoldIcon,
  duotone: TrainDuotoneIcon,
  fill: TrainFillIcon,
  light: TrainLightIcon,
  regular: TrainRegularIcon,
  thin: TrainThinIcon,
});
