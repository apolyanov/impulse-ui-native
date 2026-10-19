import { createIcon } from "../../hocs/create-icon.hoc";
import { SpeedometerBoldIcon } from "../bold/speedometer-bold.icon";
import { SpeedometerDuotoneIcon } from "../duotone/speedometer-duotone.icon";
import { SpeedometerFillIcon } from "../fill/speedometer-fill.icon";
import { SpeedometerLightIcon } from "../light/speedometer-light.icon";
import { SpeedometerRegularIcon } from "../regular/speedometer-regular.icon";
import { SpeedometerThinIcon } from "../thin/speedometer-thin.icon";

export const SpeedometerIcon = createIcon("Speedometer", {
  bold: SpeedometerBoldIcon,
  duotone: SpeedometerDuotoneIcon,
  fill: SpeedometerFillIcon,
  light: SpeedometerLightIcon,
  regular: SpeedometerRegularIcon,
  thin: SpeedometerThinIcon,
});
