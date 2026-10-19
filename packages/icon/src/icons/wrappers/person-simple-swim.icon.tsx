import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleSwimBoldIcon } from "../bold/person-simple-swim-bold.icon";
import { PersonSimpleSwimDuotoneIcon } from "../duotone/person-simple-swim-duotone.icon";
import { PersonSimpleSwimFillIcon } from "../fill/person-simple-swim-fill.icon";
import { PersonSimpleSwimLightIcon } from "../light/person-simple-swim-light.icon";
import { PersonSimpleSwimRegularIcon } from "../regular/person-simple-swim-regular.icon";
import { PersonSimpleSwimThinIcon } from "../thin/person-simple-swim-thin.icon";

export const PersonSimpleSwimIcon = createIcon("PersonSimpleSwim", {
  bold: PersonSimpleSwimBoldIcon,
  duotone: PersonSimpleSwimDuotoneIcon,
  fill: PersonSimpleSwimFillIcon,
  light: PersonSimpleSwimLightIcon,
  regular: PersonSimpleSwimRegularIcon,
  thin: PersonSimpleSwimThinIcon,
});
