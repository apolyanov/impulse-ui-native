import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleCircleBoldIcon } from "../bold/person-simple-circle-bold.icon";
import { PersonSimpleCircleDuotoneIcon } from "../duotone/person-simple-circle-duotone.icon";
import { PersonSimpleCircleFillIcon } from "../fill/person-simple-circle-fill.icon";
import { PersonSimpleCircleLightIcon } from "../light/person-simple-circle-light.icon";
import { PersonSimpleCircleRegularIcon } from "../regular/person-simple-circle-regular.icon";
import { PersonSimpleCircleThinIcon } from "../thin/person-simple-circle-thin.icon";

export const PersonSimpleCircleIcon = createIcon("PersonSimpleCircle", {
  bold: PersonSimpleCircleBoldIcon,
  duotone: PersonSimpleCircleDuotoneIcon,
  fill: PersonSimpleCircleFillIcon,
  light: PersonSimpleCircleLightIcon,
  regular: PersonSimpleCircleRegularIcon,
  thin: PersonSimpleCircleThinIcon,
});
