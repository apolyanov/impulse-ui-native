import { createIcon } from "../../hocs/create-icon.hoc";
import { ThermometerSimpleBoldIcon } from "../bold/thermometer-simple-bold.icon";
import { ThermometerSimpleDuotoneIcon } from "../duotone/thermometer-simple-duotone.icon";
import { ThermometerSimpleFillIcon } from "../fill/thermometer-simple-fill.icon";
import { ThermometerSimpleLightIcon } from "../light/thermometer-simple-light.icon";
import { ThermometerSimpleRegularIcon } from "../regular/thermometer-simple-regular.icon";
import { ThermometerSimpleThinIcon } from "../thin/thermometer-simple-thin.icon";

export const ThermometerSimpleIcon = createIcon("ThermometerSimple", {
  bold: ThermometerSimpleBoldIcon,
  duotone: ThermometerSimpleDuotoneIcon,
  fill: ThermometerSimpleFillIcon,
  light: ThermometerSimpleLightIcon,
  regular: ThermometerSimpleRegularIcon,
  thin: ThermometerSimpleThinIcon,
});
