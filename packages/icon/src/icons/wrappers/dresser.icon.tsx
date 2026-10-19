import { createIcon } from "../../hocs/create-icon.hoc";
import { DresserBoldIcon } from "../bold/dresser-bold.icon";
import { DresserDuotoneIcon } from "../duotone/dresser-duotone.icon";
import { DresserFillIcon } from "../fill/dresser-fill.icon";
import { DresserLightIcon } from "../light/dresser-light.icon";
import { DresserRegularIcon } from "../regular/dresser-regular.icon";
import { DresserThinIcon } from "../thin/dresser-thin.icon";

export const DresserIcon = createIcon("Dresser", {
  bold: DresserBoldIcon,
  duotone: DresserDuotoneIcon,
  fill: DresserFillIcon,
  light: DresserLightIcon,
  regular: DresserRegularIcon,
  thin: DresserThinIcon,
});
