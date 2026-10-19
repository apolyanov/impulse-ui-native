import { createIcon } from "../../hocs/create-icon.hoc";
import { WrenchBoldIcon } from "../bold/wrench-bold.icon";
import { WrenchDuotoneIcon } from "../duotone/wrench-duotone.icon";
import { WrenchFillIcon } from "../fill/wrench-fill.icon";
import { WrenchLightIcon } from "../light/wrench-light.icon";
import { WrenchRegularIcon } from "../regular/wrench-regular.icon";
import { WrenchThinIcon } from "../thin/wrench-thin.icon";

export const WrenchIcon = createIcon("Wrench", {
  bold: WrenchBoldIcon,
  duotone: WrenchDuotoneIcon,
  fill: WrenchFillIcon,
  light: WrenchLightIcon,
  regular: WrenchRegularIcon,
  thin: WrenchThinIcon,
});
