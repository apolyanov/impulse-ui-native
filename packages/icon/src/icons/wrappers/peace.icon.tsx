import { createIcon } from "../../hocs/create-icon.hoc";
import { PeaceBoldIcon } from "../bold/peace-bold.icon";
import { PeaceDuotoneIcon } from "../duotone/peace-duotone.icon";
import { PeaceFillIcon } from "../fill/peace-fill.icon";
import { PeaceLightIcon } from "../light/peace-light.icon";
import { PeaceRegularIcon } from "../regular/peace-regular.icon";
import { PeaceThinIcon } from "../thin/peace-thin.icon";

export const PeaceIcon = createIcon("Peace", {
  bold: PeaceBoldIcon,
  duotone: PeaceDuotoneIcon,
  fill: PeaceFillIcon,
  light: PeaceLightIcon,
  regular: PeaceRegularIcon,
  thin: PeaceThinIcon,
});
