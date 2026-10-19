import { createIcon } from "../../hocs/create-icon.hoc";
import { PlanetBoldIcon } from "../bold/planet-bold.icon";
import { PlanetDuotoneIcon } from "../duotone/planet-duotone.icon";
import { PlanetFillIcon } from "../fill/planet-fill.icon";
import { PlanetLightIcon } from "../light/planet-light.icon";
import { PlanetRegularIcon } from "../regular/planet-regular.icon";
import { PlanetThinIcon } from "../thin/planet-thin.icon";

export const PlanetIcon = createIcon("Planet", {
  bold: PlanetBoldIcon,
  duotone: PlanetDuotoneIcon,
  fill: PlanetFillIcon,
  light: PlanetLightIcon,
  regular: PlanetRegularIcon,
  thin: PlanetThinIcon,
});
