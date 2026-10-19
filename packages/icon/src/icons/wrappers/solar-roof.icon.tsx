import { createIcon } from "../../hocs/create-icon.hoc";
import { SolarRoofBoldIcon } from "../bold/solar-roof-bold.icon";
import { SolarRoofDuotoneIcon } from "../duotone/solar-roof-duotone.icon";
import { SolarRoofFillIcon } from "../fill/solar-roof-fill.icon";
import { SolarRoofLightIcon } from "../light/solar-roof-light.icon";
import { SolarRoofRegularIcon } from "../regular/solar-roof-regular.icon";
import { SolarRoofThinIcon } from "../thin/solar-roof-thin.icon";

export const SolarRoofIcon = createIcon("SolarRoof", {
  bold: SolarRoofBoldIcon,
  duotone: SolarRoofDuotoneIcon,
  fill: SolarRoofFillIcon,
  light: SolarRoofLightIcon,
  regular: SolarRoofRegularIcon,
  thin: SolarRoofThinIcon,
});
