import { createIcon } from "../../hocs/create-icon.hoc";
import { UniteBoldIcon } from "../bold/unite-bold.icon";
import { UniteDuotoneIcon } from "../duotone/unite-duotone.icon";
import { UniteFillIcon } from "../fill/unite-fill.icon";
import { UniteLightIcon } from "../light/unite-light.icon";
import { UniteRegularIcon } from "../regular/unite-regular.icon";
import { UniteThinIcon } from "../thin/unite-thin.icon";

export const UniteIcon = createIcon("Unite", {
  bold: UniteBoldIcon,
  duotone: UniteDuotoneIcon,
  fill: UniteFillIcon,
  light: UniteLightIcon,
  regular: UniteRegularIcon,
  thin: UniteThinIcon,
});
