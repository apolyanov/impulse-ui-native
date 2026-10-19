import { createIcon } from "../../hocs/create-icon.hoc";
import { LighthouseBoldIcon } from "../bold/lighthouse-bold.icon";
import { LighthouseDuotoneIcon } from "../duotone/lighthouse-duotone.icon";
import { LighthouseFillIcon } from "../fill/lighthouse-fill.icon";
import { LighthouseLightIcon } from "../light/lighthouse-light.icon";
import { LighthouseRegularIcon } from "../regular/lighthouse-regular.icon";
import { LighthouseThinIcon } from "../thin/lighthouse-thin.icon";

export const LighthouseIcon = createIcon("Lighthouse", {
  bold: LighthouseBoldIcon,
  duotone: LighthouseDuotoneIcon,
  fill: LighthouseFillIcon,
  light: LighthouseLightIcon,
  regular: LighthouseRegularIcon,
  thin: LighthouseThinIcon,
});
