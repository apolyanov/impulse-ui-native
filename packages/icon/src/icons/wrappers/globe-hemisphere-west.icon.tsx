import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeHemisphereWestBoldIcon } from "../bold/globe-hemisphere-west-bold.icon";
import { GlobeHemisphereWestDuotoneIcon } from "../duotone/globe-hemisphere-west-duotone.icon";
import { GlobeHemisphereWestFillIcon } from "../fill/globe-hemisphere-west-fill.icon";
import { GlobeHemisphereWestLightIcon } from "../light/globe-hemisphere-west-light.icon";
import { GlobeHemisphereWestRegularIcon } from "../regular/globe-hemisphere-west-regular.icon";
import { GlobeHemisphereWestThinIcon } from "../thin/globe-hemisphere-west-thin.icon";

export const GlobeHemisphereWestIcon = createIcon("GlobeHemisphereWest", {
  bold: GlobeHemisphereWestBoldIcon,
  duotone: GlobeHemisphereWestDuotoneIcon,
  fill: GlobeHemisphereWestFillIcon,
  light: GlobeHemisphereWestLightIcon,
  regular: GlobeHemisphereWestRegularIcon,
  thin: GlobeHemisphereWestThinIcon,
});
