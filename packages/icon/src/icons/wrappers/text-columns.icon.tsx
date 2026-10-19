import { createIcon } from "../../hocs/create-icon.hoc";
import { TextColumnsBoldIcon } from "../bold/text-columns-bold.icon";
import { TextColumnsDuotoneIcon } from "../duotone/text-columns-duotone.icon";
import { TextColumnsFillIcon } from "../fill/text-columns-fill.icon";
import { TextColumnsLightIcon } from "../light/text-columns-light.icon";
import { TextColumnsRegularIcon } from "../regular/text-columns-regular.icon";
import { TextColumnsThinIcon } from "../thin/text-columns-thin.icon";

export const TextColumnsIcon = createIcon("TextColumns", {
  bold: TextColumnsBoldIcon,
  duotone: TextColumnsDuotoneIcon,
  fill: TextColumnsFillIcon,
  light: TextColumnsLightIcon,
  regular: TextColumnsRegularIcon,
  thin: TextColumnsThinIcon,
});
