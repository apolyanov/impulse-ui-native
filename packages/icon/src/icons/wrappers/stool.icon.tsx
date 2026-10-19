import { createIcon } from "../../hocs/create-icon.hoc";
import { StoolBoldIcon } from "../bold/stool-bold.icon";
import { StoolDuotoneIcon } from "../duotone/stool-duotone.icon";
import { StoolFillIcon } from "../fill/stool-fill.icon";
import { StoolLightIcon } from "../light/stool-light.icon";
import { StoolRegularIcon } from "../regular/stool-regular.icon";
import { StoolThinIcon } from "../thin/stool-thin.icon";

export const StoolIcon = createIcon("Stool", {
  bold: StoolBoldIcon,
  duotone: StoolDuotoneIcon,
  fill: StoolFillIcon,
  light: StoolLightIcon,
  regular: StoolRegularIcon,
  thin: StoolThinIcon,
});
