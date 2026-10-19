import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeSimpleXBoldIcon } from "../bold/globe-simple-x-bold.icon";
import { GlobeSimpleXDuotoneIcon } from "../duotone/globe-simple-x-duotone.icon";
import { GlobeSimpleXFillIcon } from "../fill/globe-simple-x-fill.icon";
import { GlobeSimpleXLightIcon } from "../light/globe-simple-x-light.icon";
import { GlobeSimpleXRegularIcon } from "../regular/globe-simple-x-regular.icon";
import { GlobeSimpleXThinIcon } from "../thin/globe-simple-x-thin.icon";

export const GlobeSimpleXIcon = createIcon("GlobeSimpleX", {
  bold: GlobeSimpleXBoldIcon,
  duotone: GlobeSimpleXDuotoneIcon,
  fill: GlobeSimpleXFillIcon,
  light: GlobeSimpleXLightIcon,
  regular: GlobeSimpleXRegularIcon,
  thin: GlobeSimpleXThinIcon,
});
