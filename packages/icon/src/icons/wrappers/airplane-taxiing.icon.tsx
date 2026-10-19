import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneTaxiingBoldIcon } from "../bold/airplane-taxiing-bold.icon";
import { AirplaneTaxiingDuotoneIcon } from "../duotone/airplane-taxiing-duotone.icon";
import { AirplaneTaxiingFillIcon } from "../fill/airplane-taxiing-fill.icon";
import { AirplaneTaxiingLightIcon } from "../light/airplane-taxiing-light.icon";
import { AirplaneTaxiingRegularIcon } from "../regular/airplane-taxiing-regular.icon";
import { AirplaneTaxiingThinIcon } from "../thin/airplane-taxiing-thin.icon";

export const AirplaneTaxiingIcon = createIcon("AirplaneTaxiing", {
  bold: AirplaneTaxiingBoldIcon,
  duotone: AirplaneTaxiingDuotoneIcon,
  fill: AirplaneTaxiingFillIcon,
  light: AirplaneTaxiingLightIcon,
  regular: AirplaneTaxiingRegularIcon,
  thin: AirplaneTaxiingThinIcon,
});
