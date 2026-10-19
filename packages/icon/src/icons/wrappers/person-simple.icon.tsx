import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleBoldIcon } from "../bold/person-simple-bold.icon";
import { PersonSimpleDuotoneIcon } from "../duotone/person-simple-duotone.icon";
import { PersonSimpleFillIcon } from "../fill/person-simple-fill.icon";
import { PersonSimpleLightIcon } from "../light/person-simple-light.icon";
import { PersonSimpleRegularIcon } from "../regular/person-simple-regular.icon";
import { PersonSimpleThinIcon } from "../thin/person-simple-thin.icon";

export const PersonSimpleIcon = createIcon("PersonSimple", {
  bold: PersonSimpleBoldIcon,
  duotone: PersonSimpleDuotoneIcon,
  fill: PersonSimpleFillIcon,
  light: PersonSimpleLightIcon,
  regular: PersonSimpleRegularIcon,
  thin: PersonSimpleThinIcon,
});
