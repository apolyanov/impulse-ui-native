import { createIcon } from "../../hocs/create-icon.hoc";
import { CursorBoldIcon } from "../bold/cursor-bold.icon";
import { CursorDuotoneIcon } from "../duotone/cursor-duotone.icon";
import { CursorFillIcon } from "../fill/cursor-fill.icon";
import { CursorLightIcon } from "../light/cursor-light.icon";
import { CursorRegularIcon } from "../regular/cursor-regular.icon";
import { CursorThinIcon } from "../thin/cursor-thin.icon";

export const CursorIcon = createIcon("Cursor", {
  bold: CursorBoldIcon,
  duotone: CursorDuotoneIcon,
  fill: CursorFillIcon,
  light: CursorLightIcon,
  regular: CursorRegularIcon,
  thin: CursorThinIcon,
});
