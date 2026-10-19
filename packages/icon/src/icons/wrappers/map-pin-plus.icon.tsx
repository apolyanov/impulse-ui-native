import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinPlusBoldIcon } from "../bold/map-pin-plus-bold.icon";
import { MapPinPlusDuotoneIcon } from "../duotone/map-pin-plus-duotone.icon";
import { MapPinPlusFillIcon } from "../fill/map-pin-plus-fill.icon";
import { MapPinPlusLightIcon } from "../light/map-pin-plus-light.icon";
import { MapPinPlusRegularIcon } from "../regular/map-pin-plus-regular.icon";
import { MapPinPlusThinIcon } from "../thin/map-pin-plus-thin.icon";

export const MapPinPlusIcon = createIcon("MapPinPlus", {
  bold: MapPinPlusBoldIcon,
  duotone: MapPinPlusDuotoneIcon,
  fill: MapPinPlusFillIcon,
  light: MapPinPlusLightIcon,
  regular: MapPinPlusRegularIcon,
  thin: MapPinPlusThinIcon,
});
