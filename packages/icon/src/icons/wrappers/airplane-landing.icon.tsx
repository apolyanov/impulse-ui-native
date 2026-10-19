import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplaneLandingBoldIcon } from "../bold/airplane-landing-bold.icon";
import { AirplaneLandingDuotoneIcon } from "../duotone/airplane-landing-duotone.icon";
import { AirplaneLandingFillIcon } from "../fill/airplane-landing-fill.icon";
import { AirplaneLandingLightIcon } from "../light/airplane-landing-light.icon";
import { AirplaneLandingRegularIcon } from "../regular/airplane-landing-regular.icon";
import { AirplaneLandingThinIcon } from "../thin/airplane-landing-thin.icon";

export const AirplaneLandingIcon = createIcon("AirplaneLanding", {
  bold: AirplaneLandingBoldIcon,
  duotone: AirplaneLandingDuotoneIcon,
  fill: AirplaneLandingFillIcon,
  light: AirplaneLandingLightIcon,
  regular: AirplaneLandingRegularIcon,
  thin: AirplaneLandingThinIcon,
});
