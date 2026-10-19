import { createIcon } from "../../hocs/create-icon.hoc";
import { MapPinAreaBoldIcon } from "../bold/map-pin-area-bold.icon";
import { MapPinAreaDuotoneIcon } from "../duotone/map-pin-area-duotone.icon";
import { MapPinAreaFillIcon } from "../fill/map-pin-area-fill.icon";
import { MapPinAreaLightIcon } from "../light/map-pin-area-light.icon";
import { MapPinAreaRegularIcon } from "../regular/map-pin-area-regular.icon";
import { MapPinAreaThinIcon } from "../thin/map-pin-area-thin.icon";

export const MapPinAreaIcon = createIcon("MapPinArea", {
  bold: MapPinAreaBoldIcon,
  duotone: MapPinAreaDuotoneIcon,
  fill: MapPinAreaFillIcon,
  light: MapPinAreaLightIcon,
  regular: MapPinAreaRegularIcon,
  thin: MapPinAreaThinIcon,
});
