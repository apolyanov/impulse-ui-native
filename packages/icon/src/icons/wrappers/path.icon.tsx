import { createIcon } from "../../hocs/create-icon.hoc";
import { PathBoldIcon } from "../bold/path-bold.icon";
import { PathDuotoneIcon } from "../duotone/path-duotone.icon";
import { PathFillIcon } from "../fill/path-fill.icon";
import { PathLightIcon } from "../light/path-light.icon";
import { PathRegularIcon } from "../regular/path-regular.icon";
import { PathThinIcon } from "../thin/path-thin.icon";

export const PathIcon = createIcon("Path", {
  bold: PathBoldIcon,
  duotone: PathDuotoneIcon,
  fill: PathFillIcon,
  light: PathLightIcon,
  regular: PathRegularIcon,
  thin: PathThinIcon,
});
