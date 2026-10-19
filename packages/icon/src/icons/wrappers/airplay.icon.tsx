import { createIcon } from "../../hocs/create-icon.hoc";
import { AirplayBoldIcon } from "../bold/airplay-bold.icon";
import { AirplayDuotoneIcon } from "../duotone/airplay-duotone.icon";
import { AirplayFillIcon } from "../fill/airplay-fill.icon";
import { AirplayLightIcon } from "../light/airplay-light.icon";
import { AirplayRegularIcon } from "../regular/airplay-regular.icon";
import { AirplayThinIcon } from "../thin/airplay-thin.icon";

export const AirplayIcon = createIcon("Airplay", {
  bold: AirplayBoldIcon,
  duotone: AirplayDuotoneIcon,
  fill: AirplayFillIcon,
  light: AirplayLightIcon,
  regular: AirplayRegularIcon,
  thin: AirplayThinIcon,
});
