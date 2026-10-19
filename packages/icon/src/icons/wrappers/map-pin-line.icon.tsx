import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinLineBoldIcon } from "../bold/map-pin-line-bold.icon";
import { MapPinLineDuotoneIcon } from "../duotone/map-pin-line-duotone.icon";
import { MapPinLineFillIcon } from "../fill/map-pin-line-fill.icon";
import { MapPinLineLightIcon } from "../light/map-pin-line-light.icon";
import { MapPinLineRegularIcon } from "../regular/map-pin-line-regular.icon";
import { MapPinLineThinIcon } from "../thin/map-pin-line-thin.icon";

export const MapPinLineIcon = createIcon("MapPinLine", {
  bold: MapPinLineBoldIcon,
  duotone: MapPinLineDuotoneIcon,
  fill: MapPinLineFillIcon,
  light: MapPinLineLightIcon,
  regular: MapPinLineRegularIcon,
  thin: MapPinLineThinIcon,
});
