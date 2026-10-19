import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeHemisphereEastBoldIcon } from "../bold/globe-hemisphere-east-bold.icon";
import { GlobeHemisphereEastDuotoneIcon } from "../duotone/globe-hemisphere-east-duotone.icon";
import { GlobeHemisphereEastFillIcon } from "../fill/globe-hemisphere-east-fill.icon";
import { GlobeHemisphereEastLightIcon } from "../light/globe-hemisphere-east-light.icon";
import { GlobeHemisphereEastRegularIcon } from "../regular/globe-hemisphere-east-regular.icon";
import { GlobeHemisphereEastThinIcon } from "../thin/globe-hemisphere-east-thin.icon";

export const GlobeHemisphereEastIcon = createIcon("GlobeHemisphereEast", {
  bold: GlobeHemisphereEastBoldIcon,
  duotone: GlobeHemisphereEastDuotoneIcon,
  fill: GlobeHemisphereEastFillIcon,
  light: GlobeHemisphereEastLightIcon,
  regular: GlobeHemisphereEastRegularIcon,
  thin: GlobeHemisphereEastThinIcon,
});
