import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinBoldIcon } from "../bold/map-pin-bold.icon";
import { MapPinDuotoneIcon } from "../duotone/map-pin-duotone.icon";
import { MapPinFillIcon } from "../fill/map-pin-fill.icon";
import { MapPinLightIcon } from "../light/map-pin-light.icon";
import { MapPinRegularIcon } from "../regular/map-pin-regular.icon";
import { MapPinThinIcon } from "../thin/map-pin-thin.icon";

export const MapPinIcon = createIcon("MapPin", {
  bold: MapPinBoldIcon,
  duotone: MapPinDuotoneIcon,
  fill: MapPinFillIcon,
  light: MapPinLightIcon,
  regular: MapPinRegularIcon,
  thin: MapPinThinIcon,
});
