import { createIcon } from "../../hocs/create-icon.hoc";
import { HeadCircuitBoldIcon } from "../bold/head-circuit-bold.icon";
import { HeadCircuitDuotoneIcon } from "../duotone/head-circuit-duotone.icon";
import { HeadCircuitFillIcon } from "../fill/head-circuit-fill.icon";
import { HeadCircuitLightIcon } from "../light/head-circuit-light.icon";
import { HeadCircuitRegularIcon } from "../regular/head-circuit-regular.icon";
import { HeadCircuitThinIcon } from "../thin/head-circuit-thin.icon";

export const HeadCircuitIcon = createIcon("HeadCircuit", {
  bold: HeadCircuitBoldIcon,
  duotone: HeadCircuitDuotoneIcon,
  fill: HeadCircuitFillIcon,
  light: HeadCircuitLightIcon,
  regular: HeadCircuitRegularIcon,
  thin: HeadCircuitThinIcon,
});
