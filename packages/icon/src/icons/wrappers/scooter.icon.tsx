import { createIcon } from "../../hocs/create-icon.hoc";
import { ScooterBoldIcon } from "../bold/scooter-bold.icon";
import { ScooterDuotoneIcon } from "../duotone/scooter-duotone.icon";
import { ScooterFillIcon } from "../fill/scooter-fill.icon";
import { ScooterLightIcon } from "../light/scooter-light.icon";
import { ScooterRegularIcon } from "../regular/scooter-regular.icon";
import { ScooterThinIcon } from "../thin/scooter-thin.icon";

export const ScooterIcon = createIcon("Scooter", {
  bold: ScooterBoldIcon,
  duotone: ScooterDuotoneIcon,
  fill: ScooterFillIcon,
  light: ScooterLightIcon,
  regular: ScooterRegularIcon,
  thin: ScooterThinIcon,
});
