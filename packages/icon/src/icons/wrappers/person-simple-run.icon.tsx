import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleRunBoldIcon } from "../bold/person-simple-run-bold.icon";
import { PersonSimpleRunDuotoneIcon } from "../duotone/person-simple-run-duotone.icon";
import { PersonSimpleRunFillIcon } from "../fill/person-simple-run-fill.icon";
import { PersonSimpleRunLightIcon } from "../light/person-simple-run-light.icon";
import { PersonSimpleRunRegularIcon } from "../regular/person-simple-run-regular.icon";
import { PersonSimpleRunThinIcon } from "../thin/person-simple-run-thin.icon";

export const PersonSimpleRunIcon = createIcon("PersonSimpleRun", {
  bold: PersonSimpleRunBoldIcon,
  duotone: PersonSimpleRunDuotoneIcon,
  fill: PersonSimpleRunFillIcon,
  light: PersonSimpleRunLightIcon,
  regular: PersonSimpleRunRegularIcon,
  thin: PersonSimpleRunThinIcon,
});
