import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonBoldIcon } from "../bold/person-bold.icon";
import { PersonDuotoneIcon } from "../duotone/person-duotone.icon";
import { PersonFillIcon } from "../fill/person-fill.icon";
import { PersonLightIcon } from "../light/person-light.icon";
import { PersonRegularIcon } from "../regular/person-regular.icon";
import { PersonThinIcon } from "../thin/person-thin.icon";

export const PersonIcon = createIcon("Person", {
  bold: PersonBoldIcon,
  duotone: PersonDuotoneIcon,
  fill: PersonFillIcon,
  light: PersonLightIcon,
  regular: PersonRegularIcon,
  thin: PersonThinIcon,
});
