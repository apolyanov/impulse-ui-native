import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleSnowboardBoldIcon } from "../bold/person-simple-snowboard-bold.icon";
import { PersonSimpleSnowboardDuotoneIcon } from "../duotone/person-simple-snowboard-duotone.icon";
import { PersonSimpleSnowboardFillIcon } from "../fill/person-simple-snowboard-fill.icon";
import { PersonSimpleSnowboardLightIcon } from "../light/person-simple-snowboard-light.icon";
import { PersonSimpleSnowboardRegularIcon } from "../regular/person-simple-snowboard-regular.icon";
import { PersonSimpleSnowboardThinIcon } from "../thin/person-simple-snowboard-thin.icon";

export const PersonSimpleSnowboardIcon = createIcon("PersonSimpleSnowboard", {
  bold: PersonSimpleSnowboardBoldIcon,
  duotone: PersonSimpleSnowboardDuotoneIcon,
  fill: PersonSimpleSnowboardFillIcon,
  light: PersonSimpleSnowboardLightIcon,
  regular: PersonSimpleSnowboardRegularIcon,
  thin: PersonSimpleSnowboardThinIcon,
});
