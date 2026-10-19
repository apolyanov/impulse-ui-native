import { createIcon } from "../../hocs/create-icon.hoc";
import { RulerBoldIcon } from "../bold/ruler-bold.icon";
import { RulerDuotoneIcon } from "../duotone/ruler-duotone.icon";
import { RulerFillIcon } from "../fill/ruler-fill.icon";
import { RulerLightIcon } from "../light/ruler-light.icon";
import { RulerRegularIcon } from "../regular/ruler-regular.icon";
import { RulerThinIcon } from "../thin/ruler-thin.icon";

export const RulerIcon = createIcon("Ruler", {
  bold: RulerBoldIcon,
  duotone: RulerDuotoneIcon,
  fill: RulerFillIcon,
  light: RulerLightIcon,
  regular: RulerRegularIcon,
  thin: RulerThinIcon,
});
