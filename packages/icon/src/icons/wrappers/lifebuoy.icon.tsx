import { createIcon } from "../../hocs/create-icon.hoc";
import { LifebuoyBoldIcon } from "../bold/lifebuoy-bold.icon";
import { LifebuoyDuotoneIcon } from "../duotone/lifebuoy-duotone.icon";
import { LifebuoyFillIcon } from "../fill/lifebuoy-fill.icon";
import { LifebuoyLightIcon } from "../light/lifebuoy-light.icon";
import { LifebuoyRegularIcon } from "../regular/lifebuoy-regular.icon";
import { LifebuoyThinIcon } from "../thin/lifebuoy-thin.icon";

export const LifebuoyIcon = createIcon("Lifebuoy", {
  bold: LifebuoyBoldIcon,
  duotone: LifebuoyDuotoneIcon,
  fill: LifebuoyFillIcon,
  light: LifebuoyLightIcon,
  regular: LifebuoyRegularIcon,
  thin: LifebuoyThinIcon,
});
