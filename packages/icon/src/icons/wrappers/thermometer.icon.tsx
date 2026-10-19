import { createIcon } from "../../hocs/create-icon.hoc";
import { ThermometerBoldIcon } from "../bold/thermometer-bold.icon";
import { ThermometerDuotoneIcon } from "../duotone/thermometer-duotone.icon";
import { ThermometerFillIcon } from "../fill/thermometer-fill.icon";
import { ThermometerLightIcon } from "../light/thermometer-light.icon";
import { ThermometerRegularIcon } from "../regular/thermometer-regular.icon";
import { ThermometerThinIcon } from "../thin/thermometer-thin.icon";

export const ThermometerIcon = createIcon("Thermometer", {
  bold: ThermometerBoldIcon,
  duotone: ThermometerDuotoneIcon,
  fill: ThermometerFillIcon,
  light: ThermometerLightIcon,
  regular: ThermometerRegularIcon,
  thin: ThermometerThinIcon,
});
