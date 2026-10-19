import { createIcon } from "../../hocs/create-icon.hoc";
import { CrownBoldIcon } from "../bold/crown-bold.icon";
import { CrownDuotoneIcon } from "../duotone/crown-duotone.icon";
import { CrownFillIcon } from "../fill/crown-fill.icon";
import { CrownLightIcon } from "../light/crown-light.icon";
import { CrownRegularIcon } from "../regular/crown-regular.icon";
import { CrownThinIcon } from "../thin/crown-thin.icon";

export const CrownIcon = createIcon("Crown", {
  bold: CrownBoldIcon,
  duotone: CrownDuotoneIcon,
  fill: CrownFillIcon,
  light: CrownLightIcon,
  regular: CrownRegularIcon,
  thin: CrownThinIcon,
});
