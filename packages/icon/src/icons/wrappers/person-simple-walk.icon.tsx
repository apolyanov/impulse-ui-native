import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleWalkBoldIcon } from "../bold/person-simple-walk-bold.icon";
import { PersonSimpleWalkDuotoneIcon } from "../duotone/person-simple-walk-duotone.icon";
import { PersonSimpleWalkFillIcon } from "../fill/person-simple-walk-fill.icon";
import { PersonSimpleWalkLightIcon } from "../light/person-simple-walk-light.icon";
import { PersonSimpleWalkRegularIcon } from "../regular/person-simple-walk-regular.icon";
import { PersonSimpleWalkThinIcon } from "../thin/person-simple-walk-thin.icon";

export const PersonSimpleWalkIcon = createIcon("PersonSimpleWalk", {
  bold: PersonSimpleWalkBoldIcon,
  duotone: PersonSimpleWalkDuotoneIcon,
  fill: PersonSimpleWalkFillIcon,
  light: PersonSimpleWalkLightIcon,
  regular: PersonSimpleWalkRegularIcon,
  thin: PersonSimpleWalkThinIcon,
});
