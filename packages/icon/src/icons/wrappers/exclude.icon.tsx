import { createIcon } from "../../hocs/create-icon.hoc";
import { ExcludeBoldIcon } from "../bold/exclude-bold.icon";
import { ExcludeDuotoneIcon } from "../duotone/exclude-duotone.icon";
import { ExcludeFillIcon } from "../fill/exclude-fill.icon";
import { ExcludeLightIcon } from "../light/exclude-light.icon";
import { ExcludeRegularIcon } from "../regular/exclude-regular.icon";
import { ExcludeThinIcon } from "../thin/exclude-thin.icon";

export const ExcludeIcon = createIcon("Exclude", {
  bold: ExcludeBoldIcon,
  duotone: ExcludeDuotoneIcon,
  fill: ExcludeFillIcon,
  light: ExcludeLightIcon,
  regular: ExcludeRegularIcon,
  thin: ExcludeThinIcon,
});
