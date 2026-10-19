import { createIcon } from "../../hocs/create-icon.hoc";
import { ParkBoldIcon } from "../bold/park-bold.icon";
import { ParkDuotoneIcon } from "../duotone/park-duotone.icon";
import { ParkFillIcon } from "../fill/park-fill.icon";
import { ParkLightIcon } from "../light/park-light.icon";
import { ParkRegularIcon } from "../regular/park-regular.icon";
import { ParkThinIcon } from "../thin/park-thin.icon";

export const ParkIcon = createIcon("Park", {
  bold: ParkBoldIcon,
  duotone: ParkDuotoneIcon,
  fill: ParkFillIcon,
  light: ParkLightIcon,
  regular: ParkRegularIcon,
  thin: ParkThinIcon,
});
