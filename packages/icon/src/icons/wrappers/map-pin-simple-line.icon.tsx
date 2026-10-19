import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinSimpleLineBoldIcon } from "../bold/map-pin-simple-line-bold.icon";
import { MapPinSimpleLineDuotoneIcon } from "../duotone/map-pin-simple-line-duotone.icon";
import { MapPinSimpleLineFillIcon } from "../fill/map-pin-simple-line-fill.icon";
import { MapPinSimpleLineLightIcon } from "../light/map-pin-simple-line-light.icon";
import { MapPinSimpleLineRegularIcon } from "../regular/map-pin-simple-line-regular.icon";
import { MapPinSimpleLineThinIcon } from "../thin/map-pin-simple-line-thin.icon";

export const MapPinSimpleLineIcon = createIcon("MapPinSimpleLine", {
  bold: MapPinSimpleLineBoldIcon,
  duotone: MapPinSimpleLineDuotoneIcon,
  fill: MapPinSimpleLineFillIcon,
  light: MapPinSimpleLineLightIcon,
  regular: MapPinSimpleLineRegularIcon,
  thin: MapPinSimpleLineThinIcon,
});
