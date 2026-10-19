import { createIcon } from "../../hocs/create-icon.hoc";
import { TildeBoldIcon } from "../bold/tilde-bold.icon";
import { TildeDuotoneIcon } from "../duotone/tilde-duotone.icon";
import { TildeFillIcon } from "../fill/tilde-fill.icon";
import { TildeLightIcon } from "../light/tilde-light.icon";
import { TildeRegularIcon } from "../regular/tilde-regular.icon";
import { TildeThinIcon } from "../thin/tilde-thin.icon";

export const TildeIcon = createIcon("Tilde", {
  bold: TildeBoldIcon,
  duotone: TildeDuotoneIcon,
  fill: TildeFillIcon,
  light: TildeLightIcon,
  regular: TildeRegularIcon,
  thin: TildeThinIcon,
});
