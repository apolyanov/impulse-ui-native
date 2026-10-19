import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeStandBoldIcon } from "../bold/globe-stand-bold.icon";
import { GlobeStandDuotoneIcon } from "../duotone/globe-stand-duotone.icon";
import { GlobeStandFillIcon } from "../fill/globe-stand-fill.icon";
import { GlobeStandLightIcon } from "../light/globe-stand-light.icon";
import { GlobeStandRegularIcon } from "../regular/globe-stand-regular.icon";
import { GlobeStandThinIcon } from "../thin/globe-stand-thin.icon";

export const GlobeStandIcon = createIcon("GlobeStand", {
  bold: GlobeStandBoldIcon,
  duotone: GlobeStandDuotoneIcon,
  fill: GlobeStandFillIcon,
  light: GlobeStandLightIcon,
  regular: GlobeStandRegularIcon,
  thin: GlobeStandThinIcon,
});
