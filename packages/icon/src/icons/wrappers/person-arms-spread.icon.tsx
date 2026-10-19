import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonArmsSpreadBoldIcon } from "../bold/person-arms-spread-bold.icon";
import { PersonArmsSpreadDuotoneIcon } from "../duotone/person-arms-spread-duotone.icon";
import { PersonArmsSpreadFillIcon } from "../fill/person-arms-spread-fill.icon";
import { PersonArmsSpreadLightIcon } from "../light/person-arms-spread-light.icon";
import { PersonArmsSpreadRegularIcon } from "../regular/person-arms-spread-regular.icon";
import { PersonArmsSpreadThinIcon } from "../thin/person-arms-spread-thin.icon";

export const PersonArmsSpreadIcon = createIcon("PersonArmsSpread", {
  bold: PersonArmsSpreadBoldIcon,
  duotone: PersonArmsSpreadDuotoneIcon,
  fill: PersonArmsSpreadFillIcon,
  light: PersonArmsSpreadLightIcon,
  regular: PersonArmsSpreadRegularIcon,
  thin: PersonArmsSpreadThinIcon,
});
