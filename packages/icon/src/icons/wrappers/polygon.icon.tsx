import { createIcon } from "../../hocs/create-icon.hoc";
import { PolygonBoldIcon } from "../bold/polygon-bold.icon";
import { PolygonDuotoneIcon } from "../duotone/polygon-duotone.icon";
import { PolygonFillIcon } from "../fill/polygon-fill.icon";
import { PolygonLightIcon } from "../light/polygon-light.icon";
import { PolygonRegularIcon } from "../regular/polygon-regular.icon";
import { PolygonThinIcon } from "../thin/polygon-thin.icon";

export const PolygonIcon = createIcon("Polygon", {
  bold: PolygonBoldIcon,
  duotone: PolygonDuotoneIcon,
  fill: PolygonFillIcon,
  light: PolygonLightIcon,
  regular: PolygonRegularIcon,
  thin: PolygonThinIcon,
});
