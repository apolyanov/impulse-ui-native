import { createIcon } from "../../hocs/create-icon.hoc";
import { SpadeBoldIcon } from "../bold/spade-bold.icon";
import { SpadeDuotoneIcon } from "../duotone/spade-duotone.icon";
import { SpadeFillIcon } from "../fill/spade-fill.icon";
import { SpadeLightIcon } from "../light/spade-light.icon";
import { SpadeRegularIcon } from "../regular/spade-regular.icon";
import { SpadeThinIcon } from "../thin/spade-thin.icon";

export const SpadeIcon = createIcon("Spade", {
  bold: SpadeBoldIcon,
  duotone: SpadeDuotoneIcon,
  fill: SpadeFillIcon,
  light: SpadeLightIcon,
  regular: SpadeRegularIcon,
  thin: SpadeThinIcon,
});
