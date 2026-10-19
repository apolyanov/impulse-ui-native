import { createIcon } from "../../hocs/create-icon.hoc";
import { FlowerLotusBoldIcon } from "../bold/flower-lotus-bold.icon";
import { FlowerLotusDuotoneIcon } from "../duotone/flower-lotus-duotone.icon";
import { FlowerLotusFillIcon } from "../fill/flower-lotus-fill.icon";
import { FlowerLotusLightIcon } from "../light/flower-lotus-light.icon";
import { FlowerLotusRegularIcon } from "../regular/flower-lotus-regular.icon";
import { FlowerLotusThinIcon } from "../thin/flower-lotus-thin.icon";

export const FlowerLotusIcon = createIcon("FlowerLotus", {
  bold: FlowerLotusBoldIcon,
  duotone: FlowerLotusDuotoneIcon,
  fill: FlowerLotusFillIcon,
  light: FlowerLotusLightIcon,
  regular: FlowerLotusRegularIcon,
  thin: FlowerLotusThinIcon,
});
