import { createIcon } from "../../hocs/create-icon.hoc";
import { MapTrifoldBoldIcon } from "../bold/map-trifold-bold.icon";
import { MapTrifoldDuotoneIcon } from "../duotone/map-trifold-duotone.icon";
import { MapTrifoldFillIcon } from "../fill/map-trifold-fill.icon";
import { MapTrifoldLightIcon } from "../light/map-trifold-light.icon";
import { MapTrifoldRegularIcon } from "../regular/map-trifold-regular.icon";
import { MapTrifoldThinIcon } from "../thin/map-trifold-thin.icon";

export const MapTrifoldIcon = createIcon("MapTrifold", {
  bold: MapTrifoldBoldIcon,
  duotone: MapTrifoldDuotoneIcon,
  fill: MapTrifoldFillIcon,
  light: MapTrifoldLightIcon,
  regular: MapTrifoldRegularIcon,
  thin: MapTrifoldThinIcon,
});
