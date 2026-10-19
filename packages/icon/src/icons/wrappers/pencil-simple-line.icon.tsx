import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilSimpleLineBoldIcon } from "../bold/pencil-simple-line-bold.icon";
import { PencilSimpleLineDuotoneIcon } from "../duotone/pencil-simple-line-duotone.icon";
import { PencilSimpleLineFillIcon } from "../fill/pencil-simple-line-fill.icon";
import { PencilSimpleLineLightIcon } from "../light/pencil-simple-line-light.icon";
import { PencilSimpleLineRegularIcon } from "../regular/pencil-simple-line-regular.icon";
import { PencilSimpleLineThinIcon } from "../thin/pencil-simple-line-thin.icon";

export const PencilSimpleLineIcon = createIcon("PencilSimpleLine", {
  bold: PencilSimpleLineBoldIcon,
  duotone: PencilSimpleLineDuotoneIcon,
  fill: PencilSimpleLineFillIcon,
  light: PencilSimpleLineLightIcon,
  regular: PencilSimpleLineRegularIcon,
  thin: PencilSimpleLineThinIcon,
});
