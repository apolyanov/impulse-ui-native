import { createIcon } from "../../hocs/create-icon.hoc";
import { CursorClickBoldIcon } from "../bold/cursor-click-bold.icon";
import { CursorClickDuotoneIcon } from "../duotone/cursor-click-duotone.icon";
import { CursorClickFillIcon } from "../fill/cursor-click-fill.icon";
import { CursorClickLightIcon } from "../light/cursor-click-light.icon";
import { CursorClickRegularIcon } from "../regular/cursor-click-regular.icon";
import { CursorClickThinIcon } from "../thin/cursor-click-thin.icon";

export const CursorClickIcon = createIcon("CursorClick", {
  bold: CursorClickBoldIcon,
  duotone: CursorClickDuotoneIcon,
  fill: CursorClickFillIcon,
  light: CursorClickLightIcon,
  regular: CursorClickRegularIcon,
  thin: CursorClickThinIcon,
});
