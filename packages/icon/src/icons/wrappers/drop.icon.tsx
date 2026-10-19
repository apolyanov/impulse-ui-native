import { createIcon } from "../../hocs/create-icon.hoc";
import { DropBoldIcon } from "../bold/drop-bold.icon";
import { DropDuotoneIcon } from "../duotone/drop-duotone.icon";
import { DropFillIcon } from "../fill/drop-fill.icon";
import { DropLightIcon } from "../light/drop-light.icon";
import { DropRegularIcon } from "../regular/drop-regular.icon";
import { DropThinIcon } from "../thin/drop-thin.icon";

export const DropIcon = createIcon("Drop", {
  bold: DropBoldIcon,
  duotone: DropDuotoneIcon,
  fill: DropFillIcon,
  light: DropLightIcon,
  regular: DropRegularIcon,
  thin: DropThinIcon,
});
