import { createIcon } from "../../hocs/create-icon.hoc";
import { CircuitryBoldIcon } from "../bold/circuitry-bold.icon";
import { CircuitryDuotoneIcon } from "../duotone/circuitry-duotone.icon";
import { CircuitryFillIcon } from "../fill/circuitry-fill.icon";
import { CircuitryLightIcon } from "../light/circuitry-light.icon";
import { CircuitryRegularIcon } from "../regular/circuitry-regular.icon";
import { CircuitryThinIcon } from "../thin/circuitry-thin.icon";

export const CircuitryIcon = createIcon("Circuitry", {
  bold: CircuitryBoldIcon,
  duotone: CircuitryDuotoneIcon,
  fill: CircuitryFillIcon,
  light: CircuitryLightIcon,
  regular: CircuitryRegularIcon,
  thin: CircuitryThinIcon,
});
