import { createIcon } from "../../hocs/create-icon.hoc";
import { BulldozerBoldIcon } from "../bold/bulldozer-bold.icon";
import { BulldozerDuotoneIcon } from "../duotone/bulldozer-duotone.icon";
import { BulldozerFillIcon } from "../fill/bulldozer-fill.icon";
import { BulldozerLightIcon } from "../light/bulldozer-light.icon";
import { BulldozerRegularIcon } from "../regular/bulldozer-regular.icon";
import { BulldozerThinIcon } from "../thin/bulldozer-thin.icon";

export const BulldozerIcon = createIcon("Bulldozer", {
  bold: BulldozerBoldIcon,
  duotone: BulldozerDuotoneIcon,
  fill: BulldozerFillIcon,
  light: BulldozerLightIcon,
  regular: BulldozerRegularIcon,
  thin: BulldozerThinIcon,
});
