import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeXBoldIcon } from "../bold/globe-x-bold.icon";
import { GlobeXDuotoneIcon } from "../duotone/globe-x-duotone.icon";
import { GlobeXFillIcon } from "../fill/globe-x-fill.icon";
import { GlobeXLightIcon } from "../light/globe-x-light.icon";
import { GlobeXRegularIcon } from "../regular/globe-x-regular.icon";
import { GlobeXThinIcon } from "../thin/globe-x-thin.icon";

export const GlobeXIcon = createIcon("GlobeX", {
  bold: GlobeXBoldIcon,
  duotone: GlobeXDuotoneIcon,
  fill: GlobeXFillIcon,
  light: GlobeXLightIcon,
  regular: GlobeXRegularIcon,
  thin: GlobeXThinIcon,
});
