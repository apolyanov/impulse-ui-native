import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleSkiBoldIcon } from "../bold/person-simple-ski-bold.icon";
import { PersonSimpleSkiDuotoneIcon } from "../duotone/person-simple-ski-duotone.icon";
import { PersonSimpleSkiFillIcon } from "../fill/person-simple-ski-fill.icon";
import { PersonSimpleSkiLightIcon } from "../light/person-simple-ski-light.icon";
import { PersonSimpleSkiRegularIcon } from "../regular/person-simple-ski-regular.icon";
import { PersonSimpleSkiThinIcon } from "../thin/person-simple-ski-thin.icon";

export const PersonSimpleSkiIcon = createIcon("PersonSimpleSki", {
  bold: PersonSimpleSkiBoldIcon,
  duotone: PersonSimpleSkiDuotoneIcon,
  fill: PersonSimpleSkiFillIcon,
  light: PersonSimpleSkiLightIcon,
  regular: PersonSimpleSkiRegularIcon,
  thin: PersonSimpleSkiThinIcon,
});
