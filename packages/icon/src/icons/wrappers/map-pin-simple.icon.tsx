import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinSimpleBoldIcon } from "../bold/map-pin-simple-bold.icon";
import { MapPinSimpleDuotoneIcon } from "../duotone/map-pin-simple-duotone.icon";
import { MapPinSimpleFillIcon } from "../fill/map-pin-simple-fill.icon";
import { MapPinSimpleLightIcon } from "../light/map-pin-simple-light.icon";
import { MapPinSimpleRegularIcon } from "../regular/map-pin-simple-regular.icon";
import { MapPinSimpleThinIcon } from "../thin/map-pin-simple-thin.icon";

export const MapPinSimpleIcon = createIcon("MapPinSimple", {
  bold: MapPinSimpleBoldIcon,
  duotone: MapPinSimpleDuotoneIcon,
  fill: MapPinSimpleFillIcon,
  light: MapPinSimpleLightIcon,
  regular: MapPinSimpleRegularIcon,
  thin: MapPinSimpleThinIcon,
});
