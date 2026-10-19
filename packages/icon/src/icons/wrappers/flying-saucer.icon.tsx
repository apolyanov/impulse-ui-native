import { createIcon } from "../../hocs/create-icon.hoc";
import { FlyingSaucerBoldIcon } from "../bold/flying-saucer-bold.icon";
import { FlyingSaucerDuotoneIcon } from "../duotone/flying-saucer-duotone.icon";
import { FlyingSaucerFillIcon } from "../fill/flying-saucer-fill.icon";
import { FlyingSaucerLightIcon } from "../light/flying-saucer-light.icon";
import { FlyingSaucerRegularIcon } from "../regular/flying-saucer-regular.icon";
import { FlyingSaucerThinIcon } from "../thin/flying-saucer-thin.icon";

export const FlyingSaucerIcon = createIcon("FlyingSaucer", {
  bold: FlyingSaucerBoldIcon,
  duotone: FlyingSaucerDuotoneIcon,
  fill: FlyingSaucerFillIcon,
  light: FlyingSaucerLightIcon,
  regular: FlyingSaucerRegularIcon,
  thin: FlyingSaucerThinIcon,
});
