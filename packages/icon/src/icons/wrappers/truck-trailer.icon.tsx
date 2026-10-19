import { createIcon } from "../../hocs/create-icon.hoc";
import { TruckTrailerBoldIcon } from "../bold/truck-trailer-bold.icon";
import { TruckTrailerDuotoneIcon } from "../duotone/truck-trailer-duotone.icon";
import { TruckTrailerFillIcon } from "../fill/truck-trailer-fill.icon";
import { TruckTrailerLightIcon } from "../light/truck-trailer-light.icon";
import { TruckTrailerRegularIcon } from "../regular/truck-trailer-regular.icon";
import { TruckTrailerThinIcon } from "../thin/truck-trailer-thin.icon";

export const TruckTrailerIcon = createIcon("TruckTrailer", {
  bold: TruckTrailerBoldIcon,
  duotone: TruckTrailerDuotoneIcon,
  fill: TruckTrailerFillIcon,
  light: TruckTrailerLightIcon,
  regular: TruckTrailerRegularIcon,
  thin: TruckTrailerThinIcon,
});
