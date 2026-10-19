import { createIcon } from "../../hocs/create-icon.hoc";
import { LadderBoldIcon } from "../bold/ladder-bold.icon";
import { LadderDuotoneIcon } from "../duotone/ladder-duotone.icon";
import { LadderFillIcon } from "../fill/ladder-fill.icon";
import { LadderLightIcon } from "../light/ladder-light.icon";
import { LadderRegularIcon } from "../regular/ladder-regular.icon";
import { LadderThinIcon } from "../thin/ladder-thin.icon";

export const LadderIcon = createIcon("Ladder", {
  bold: LadderBoldIcon,
  duotone: LadderDuotoneIcon,
  fill: LadderFillIcon,
  light: LadderLightIcon,
  regular: LadderRegularIcon,
  thin: LadderThinIcon,
});
