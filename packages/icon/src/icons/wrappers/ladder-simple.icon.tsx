import { createIcon } from "../../hocs/create-icon.hoc";
import { LadderSimpleBoldIcon } from "../bold/ladder-simple-bold.icon";
import { LadderSimpleDuotoneIcon } from "../duotone/ladder-simple-duotone.icon";
import { LadderSimpleFillIcon } from "../fill/ladder-simple-fill.icon";
import { LadderSimpleLightIcon } from "../light/ladder-simple-light.icon";
import { LadderSimpleRegularIcon } from "../regular/ladder-simple-regular.icon";
import { LadderSimpleThinIcon } from "../thin/ladder-simple-thin.icon";

export const LadderSimpleIcon = createIcon("LadderSimple", {
  bold: LadderSimpleBoldIcon,
  duotone: LadderSimpleDuotoneIcon,
  fill: LadderSimpleFillIcon,
  light: LadderSimpleLightIcon,
  regular: LadderSimpleRegularIcon,
  thin: LadderSimpleThinIcon,
});
