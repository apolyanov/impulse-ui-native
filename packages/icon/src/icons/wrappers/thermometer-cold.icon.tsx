import { createIcon } from "../../hocs/create-icon.hoc";
import { ThermometerColdBoldIcon } from "../bold/thermometer-cold-bold.icon";
import { ThermometerColdDuotoneIcon } from "../duotone/thermometer-cold-duotone.icon";
import { ThermometerColdFillIcon } from "../fill/thermometer-cold-fill.icon";
import { ThermometerColdLightIcon } from "../light/thermometer-cold-light.icon";
import { ThermometerColdRegularIcon } from "../regular/thermometer-cold-regular.icon";
import { ThermometerColdThinIcon } from "../thin/thermometer-cold-thin.icon";

export const ThermometerColdIcon = createIcon("ThermometerCold", {
  bold: ThermometerColdBoldIcon,
  duotone: ThermometerColdDuotoneIcon,
  fill: ThermometerColdFillIcon,
  light: ThermometerColdLightIcon,
  regular: ThermometerColdRegularIcon,
  thin: ThermometerColdThinIcon,
});
