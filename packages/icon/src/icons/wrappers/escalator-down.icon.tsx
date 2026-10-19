import { createIcon } from "../../hocs/create-icon.hoc";
import { EscalatorDownBoldIcon } from "../bold/escalator-down-bold.icon";
import { EscalatorDownDuotoneIcon } from "../duotone/escalator-down-duotone.icon";
import { EscalatorDownFillIcon } from "../fill/escalator-down-fill.icon";
import { EscalatorDownLightIcon } from "../light/escalator-down-light.icon";
import { EscalatorDownRegularIcon } from "../regular/escalator-down-regular.icon";
import { EscalatorDownThinIcon } from "../thin/escalator-down-thin.icon";

export const EscalatorDownIcon = createIcon("EscalatorDown", {
  bold: EscalatorDownBoldIcon,
  duotone: EscalatorDownDuotoneIcon,
  fill: EscalatorDownFillIcon,
  light: EscalatorDownLightIcon,
  regular: EscalatorDownRegularIcon,
  thin: EscalatorDownThinIcon,
});
