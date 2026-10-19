import { createIcon } from "../../hocs/create-icon.hoc";
import { ChargingStationBoldIcon } from "../bold/charging-station-bold.icon";
import { ChargingStationDuotoneIcon } from "../duotone/charging-station-duotone.icon";
import { ChargingStationFillIcon } from "../fill/charging-station-fill.icon";
import { ChargingStationLightIcon } from "../light/charging-station-light.icon";
import { ChargingStationRegularIcon } from "../regular/charging-station-regular.icon";
import { ChargingStationThinIcon } from "../thin/charging-station-thin.icon";

export const ChargingStationIcon = createIcon("ChargingStation", {
  bold: ChargingStationBoldIcon,
  duotone: ChargingStationDuotoneIcon,
  fill: ChargingStationFillIcon,
  light: ChargingStationLightIcon,
  regular: ChargingStationRegularIcon,
  thin: ChargingStationThinIcon,
});
