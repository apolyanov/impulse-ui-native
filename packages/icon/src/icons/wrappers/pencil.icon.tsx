import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilBoldIcon } from "../bold/pencil-bold.icon";
import { PencilDuotoneIcon } from "../duotone/pencil-duotone.icon";
import { PencilFillIcon } from "../fill/pencil-fill.icon";
import { PencilLightIcon } from "../light/pencil-light.icon";
import { PencilRegularIcon } from "../regular/pencil-regular.icon";
import { PencilThinIcon } from "../thin/pencil-thin.icon";

export const PencilIcon = createIcon("Pencil", {
  bold: PencilBoldIcon,
  duotone: PencilDuotoneIcon,
  fill: PencilFillIcon,
  light: PencilLightIcon,
  regular: PencilRegularIcon,
  thin: PencilThinIcon,
});
