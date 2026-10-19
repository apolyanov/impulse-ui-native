import { createIcon } from "../../hocs/create-icon.hoc";
import { FlameBoldIcon } from "../bold/flame-bold.icon";
import { FlameDuotoneIcon } from "../duotone/flame-duotone.icon";
import { FlameFillIcon } from "../fill/flame-fill.icon";
import { FlameLightIcon } from "../light/flame-light.icon";
import { FlameRegularIcon } from "../regular/flame-regular.icon";
import { FlameThinIcon } from "../thin/flame-thin.icon";

export const FlameIcon = createIcon("Flame", {
  bold: FlameBoldIcon,
  duotone: FlameDuotoneIcon,
  fill: FlameFillIcon,
  light: FlameLightIcon,
  regular: FlameRegularIcon,
  thin: FlameThinIcon,
});
