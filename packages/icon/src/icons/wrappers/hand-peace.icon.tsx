import { createIcon } from "../../hocs/create-icon.hoc";
import { HandPeaceBoldIcon } from "../bold/hand-peace-bold.icon";
import { HandPeaceDuotoneIcon } from "../duotone/hand-peace-duotone.icon";
import { HandPeaceFillIcon } from "../fill/hand-peace-fill.icon";
import { HandPeaceLightIcon } from "../light/hand-peace-light.icon";
import { HandPeaceRegularIcon } from "../regular/hand-peace-regular.icon";
import { HandPeaceThinIcon } from "../thin/hand-peace-thin.icon";

export const HandPeaceIcon = createIcon("HandPeace", {
  bold: HandPeaceBoldIcon,
  duotone: HandPeaceDuotoneIcon,
  fill: HandPeaceFillIcon,
  light: HandPeaceLightIcon,
  regular: HandPeaceRegularIcon,
  thin: HandPeaceThinIcon,
});
