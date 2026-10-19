import { createIcon } from "../../hocs/create-icon.hoc";
import { TrainSimpleBoldIcon } from "../bold/train-simple-bold.icon";
import { TrainSimpleDuotoneIcon } from "../duotone/train-simple-duotone.icon";
import { TrainSimpleFillIcon } from "../fill/train-simple-fill.icon";
import { TrainSimpleLightIcon } from "../light/train-simple-light.icon";
import { TrainSimpleRegularIcon } from "../regular/train-simple-regular.icon";
import { TrainSimpleThinIcon } from "../thin/train-simple-thin.icon";

export const TrainSimpleIcon = createIcon("TrainSimple", {
  bold: TrainSimpleBoldIcon,
  duotone: TrainSimpleDuotoneIcon,
  fill: TrainSimpleFillIcon,
  light: TrainSimpleLightIcon,
  regular: TrainSimpleRegularIcon,
  thin: TrainSimpleThinIcon,
});
