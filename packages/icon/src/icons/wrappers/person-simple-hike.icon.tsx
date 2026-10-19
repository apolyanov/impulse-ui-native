import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleHikeBoldIcon } from "../bold/person-simple-hike-bold.icon";
import { PersonSimpleHikeDuotoneIcon } from "../duotone/person-simple-hike-duotone.icon";
import { PersonSimpleHikeFillIcon } from "../fill/person-simple-hike-fill.icon";
import { PersonSimpleHikeLightIcon } from "../light/person-simple-hike-light.icon";
import { PersonSimpleHikeRegularIcon } from "../regular/person-simple-hike-regular.icon";
import { PersonSimpleHikeThinIcon } from "../thin/person-simple-hike-thin.icon";

export const PersonSimpleHikeIcon = createIcon("PersonSimpleHike", {
  bold: PersonSimpleHikeBoldIcon,
  duotone: PersonSimpleHikeDuotoneIcon,
  fill: PersonSimpleHikeFillIcon,
  light: PersonSimpleHikeLightIcon,
  regular: PersonSimpleHikeRegularIcon,
  thin: PersonSimpleHikeThinIcon,
});
