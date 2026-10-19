import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneInFlightBoldIcon } from "../bold/airplane-in-flight-bold.icon";
import { AirplaneInFlightDuotoneIcon } from "../duotone/airplane-in-flight-duotone.icon";
import { AirplaneInFlightFillIcon } from "../fill/airplane-in-flight-fill.icon";
import { AirplaneInFlightLightIcon } from "../light/airplane-in-flight-light.icon";
import { AirplaneInFlightRegularIcon } from "../regular/airplane-in-flight-regular.icon";
import { AirplaneInFlightThinIcon } from "../thin/airplane-in-flight-thin.icon";

export const AirplaneInFlightIcon = createIcon("AirplaneInFlight", {
  bold: AirplaneInFlightBoldIcon,
  duotone: AirplaneInFlightDuotoneIcon,
  fill: AirplaneInFlightFillIcon,
  light: AirplaneInFlightLightIcon,
  regular: AirplaneInFlightRegularIcon,
  thin: AirplaneInFlightThinIcon,
});
