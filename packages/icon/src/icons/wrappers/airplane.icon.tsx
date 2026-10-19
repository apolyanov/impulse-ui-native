import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneBoldIcon } from "../bold/airplane-bold.icon";
import { AirplaneDuotoneIcon } from "../duotone/airplane-duotone.icon";
import { AirplaneFillIcon } from "../fill/airplane-fill.icon";
import { AirplaneLightIcon } from "../light/airplane-light.icon";
import { AirplaneRegularIcon } from "../regular/airplane-regular.icon";
import { AirplaneThinIcon } from "../thin/airplane-thin.icon";

export const AirplaneIcon = createIcon("Airplane", {
  bold: AirplaneBoldIcon,
  duotone: AirplaneDuotoneIcon,
  fill: AirplaneFillIcon,
  light: AirplaneLightIcon,
  regular: AirplaneRegularIcon,
  thin: AirplaneThinIcon,
});
