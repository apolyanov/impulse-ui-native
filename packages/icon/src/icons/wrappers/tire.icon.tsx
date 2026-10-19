import { createIcon } from "../../hocs/create-icon.hoc";
import { TireBoldIcon } from "../bold/tire-bold.icon";
import { TireDuotoneIcon } from "../duotone/tire-duotone.icon";
import { TireFillIcon } from "../fill/tire-fill.icon";
import { TireLightIcon } from "../light/tire-light.icon";
import { TireRegularIcon } from "../regular/tire-regular.icon";
import { TireThinIcon } from "../thin/tire-thin.icon";

export const TireIcon = createIcon("Tire", {
  bold: TireBoldIcon,
  duotone: TireDuotoneIcon,
  fill: TireFillIcon,
  light: TireLightIcon,
  regular: TireRegularIcon,
  thin: TireThinIcon,
});
