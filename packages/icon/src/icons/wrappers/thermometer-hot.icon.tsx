import { createIcon } from "../../hocs/create-icon.hoc";
import { ThermometerHotBoldIcon } from "../bold/thermometer-hot-bold.icon";
import { ThermometerHotDuotoneIcon } from "../duotone/thermometer-hot-duotone.icon";
import { ThermometerHotFillIcon } from "../fill/thermometer-hot-fill.icon";
import { ThermometerHotLightIcon } from "../light/thermometer-hot-light.icon";
import { ThermometerHotRegularIcon } from "../regular/thermometer-hot-regular.icon";
import { ThermometerHotThinIcon } from "../thin/thermometer-hot-thin.icon";

export const ThermometerHotIcon = createIcon("ThermometerHot", {
  bold: ThermometerHotBoldIcon,
  duotone: ThermometerHotDuotoneIcon,
  fill: ThermometerHotFillIcon,
  light: ThermometerHotLightIcon,
  regular: ThermometerHotRegularIcon,
  thin: ThermometerHotThinIcon,
});
