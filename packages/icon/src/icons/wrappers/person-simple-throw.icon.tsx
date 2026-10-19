import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleThrowBoldIcon } from "../bold/person-simple-throw-bold.icon";
import { PersonSimpleThrowDuotoneIcon } from "../duotone/person-simple-throw-duotone.icon";
import { PersonSimpleThrowFillIcon } from "../fill/person-simple-throw-fill.icon";
import { PersonSimpleThrowLightIcon } from "../light/person-simple-throw-light.icon";
import { PersonSimpleThrowRegularIcon } from "../regular/person-simple-throw-regular.icon";
import { PersonSimpleThrowThinIcon } from "../thin/person-simple-throw-thin.icon";

export const PersonSimpleThrowIcon = createIcon("PersonSimpleThrow", {
  bold: PersonSimpleThrowBoldIcon,
  duotone: PersonSimpleThrowDuotoneIcon,
  fill: PersonSimpleThrowFillIcon,
  light: PersonSimpleThrowLightIcon,
  regular: PersonSimpleThrowRegularIcon,
  thin: PersonSimpleThrowThinIcon,
});
