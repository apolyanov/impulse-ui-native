import { createIcon } from "../../hocs/create-icon.hoc";
import { RoadHorizonBoldIcon } from "../bold/road-horizon-bold.icon";
import { RoadHorizonDuotoneIcon } from "../duotone/road-horizon-duotone.icon";
import { RoadHorizonFillIcon } from "../fill/road-horizon-fill.icon";
import { RoadHorizonLightIcon } from "../light/road-horizon-light.icon";
import { RoadHorizonRegularIcon } from "../regular/road-horizon-regular.icon";
import { RoadHorizonThinIcon } from "../thin/road-horizon-thin.icon";

export const RoadHorizonIcon = createIcon("RoadHorizon", {
  bold: RoadHorizonBoldIcon,
  duotone: RoadHorizonDuotoneIcon,
  fill: RoadHorizonFillIcon,
  light: RoadHorizonLightIcon,
  regular: RoadHorizonRegularIcon,
  thin: RoadHorizonThinIcon,
});
