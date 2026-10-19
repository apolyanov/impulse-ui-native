import { createIcon } from "../../hocs/create-icon.hoc";
import { DoorOpenBoldIcon } from "../bold/door-open-bold.icon";
import { DoorOpenDuotoneIcon } from "../duotone/door-open-duotone.icon";
import { DoorOpenFillIcon } from "../fill/door-open-fill.icon";
import { DoorOpenLightIcon } from "../light/door-open-light.icon";
import { DoorOpenRegularIcon } from "../regular/door-open-regular.icon";
import { DoorOpenThinIcon } from "../thin/door-open-thin.icon";

export const DoorOpenIcon = createIcon("DoorOpen", {
  bold: DoorOpenBoldIcon,
  duotone: DoorOpenDuotoneIcon,
  fill: DoorOpenFillIcon,
  light: DoorOpenLightIcon,
  regular: DoorOpenRegularIcon,
  thin: DoorOpenThinIcon,
});
