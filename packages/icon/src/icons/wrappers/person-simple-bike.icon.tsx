import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleBikeBoldIcon } from "../bold/person-simple-bike-bold.icon";
import { PersonSimpleBikeDuotoneIcon } from "../duotone/person-simple-bike-duotone.icon";
import { PersonSimpleBikeFillIcon } from "../fill/person-simple-bike-fill.icon";
import { PersonSimpleBikeLightIcon } from "../light/person-simple-bike-light.icon";
import { PersonSimpleBikeRegularIcon } from "../regular/person-simple-bike-regular.icon";
import { PersonSimpleBikeThinIcon } from "../thin/person-simple-bike-thin.icon";

export const PersonSimpleBikeIcon = createIcon("PersonSimpleBike", {
  bold: PersonSimpleBikeBoldIcon,
  duotone: PersonSimpleBikeDuotoneIcon,
  fill: PersonSimpleBikeFillIcon,
  light: PersonSimpleBikeLightIcon,
  regular: PersonSimpleBikeRegularIcon,
  thin: PersonSimpleBikeThinIcon,
});
