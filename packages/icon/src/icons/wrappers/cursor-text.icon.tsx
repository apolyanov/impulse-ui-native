import { createIcon } from "../../hocs/create-icon.hoc";
import { CursorTextBoldIcon } from "../bold/cursor-text-bold.icon";
import { CursorTextDuotoneIcon } from "../duotone/cursor-text-duotone.icon";
import { CursorTextFillIcon } from "../fill/cursor-text-fill.icon";
import { CursorTextLightIcon } from "../light/cursor-text-light.icon";
import { CursorTextRegularIcon } from "../regular/cursor-text-regular.icon";
import { CursorTextThinIcon } from "../thin/cursor-text-thin.icon";

export const CursorTextIcon = createIcon("CursorText", {
  bold: CursorTextBoldIcon,
  duotone: CursorTextDuotoneIcon,
  fill: CursorTextFillIcon,
  light: CursorTextLightIcon,
  regular: CursorTextRegularIcon,
  thin: CursorTextThinIcon,
});
