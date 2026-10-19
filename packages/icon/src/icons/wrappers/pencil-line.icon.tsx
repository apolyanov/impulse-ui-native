import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilLineBoldIcon } from "../bold/pencil-line-bold.icon";
import { PencilLineDuotoneIcon } from "../duotone/pencil-line-duotone.icon";
import { PencilLineFillIcon } from "../fill/pencil-line-fill.icon";
import { PencilLineLightIcon } from "../light/pencil-line-light.icon";
import { PencilLineRegularIcon } from "../regular/pencil-line-regular.icon";
import { PencilLineThinIcon } from "../thin/pencil-line-thin.icon";

export const PencilLineIcon = createIcon("PencilLine", {
  bold: PencilLineBoldIcon,
  duotone: PencilLineDuotoneIcon,
  fill: PencilLineFillIcon,
  light: PencilLineLightIcon,
  regular: PencilLineRegularIcon,
  thin: PencilLineThinIcon,
});
