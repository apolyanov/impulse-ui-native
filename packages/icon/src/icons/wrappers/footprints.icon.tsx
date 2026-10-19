import { createIcon } from "../../hocs/create-icon.hoc";
import { FootprintsBoldIcon } from "../bold/footprints-bold.icon";
import { FootprintsDuotoneIcon } from "../duotone/footprints-duotone.icon";
import { FootprintsFillIcon } from "../fill/footprints-fill.icon";
import { FootprintsLightIcon } from "../light/footprints-light.icon";
import { FootprintsRegularIcon } from "../regular/footprints-regular.icon";
import { FootprintsThinIcon } from "../thin/footprints-thin.icon";

export const FootprintsIcon = createIcon("Footprints", {
  bold: FootprintsBoldIcon,
  duotone: FootprintsDuotoneIcon,
  fill: FootprintsFillIcon,
  light: FootprintsLightIcon,
  regular: FootprintsRegularIcon,
  thin: FootprintsThinIcon,
});
