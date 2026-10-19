import { createIcon } from "../../hocs/create-icon.hoc";
import { GlobeBoldIcon } from "../bold/globe-bold.icon";
import { GlobeDuotoneIcon } from "../duotone/globe-duotone.icon";
import { GlobeFillIcon } from "../fill/globe-fill.icon";
import { GlobeLightIcon } from "../light/globe-light.icon";
import { GlobeRegularIcon } from "../regular/globe-regular.icon";
import { GlobeThinIcon } from "../thin/globe-thin.icon";

export const GlobeIcon = createIcon("Globe", {
  bold: GlobeBoldIcon,
  duotone: GlobeDuotoneIcon,
  fill: GlobeFillIcon,
  light: GlobeLightIcon,
  regular: GlobeRegularIcon,
  thin: GlobeThinIcon,
});
