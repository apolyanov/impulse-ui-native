import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeSimpleBoldIcon } from "../bold/globe-simple-bold.icon";
import { GlobeSimpleDuotoneIcon } from "../duotone/globe-simple-duotone.icon";
import { GlobeSimpleFillIcon } from "../fill/globe-simple-fill.icon";
import { GlobeSimpleLightIcon } from "../light/globe-simple-light.icon";
import { GlobeSimpleRegularIcon } from "../regular/globe-simple-regular.icon";
import { GlobeSimpleThinIcon } from "../thin/globe-simple-thin.icon";

export const GlobeSimpleIcon = createIcon("GlobeSimple", {
  bold: GlobeSimpleBoldIcon,
  duotone: GlobeSimpleDuotoneIcon,
  fill: GlobeSimpleFillIcon,
  light: GlobeSimpleLightIcon,
  regular: GlobeSimpleRegularIcon,
  thin: GlobeSimpleThinIcon,
});
