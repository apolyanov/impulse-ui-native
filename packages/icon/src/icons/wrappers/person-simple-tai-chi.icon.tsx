import { createIcon } from "../../hocs/create-icon.hoc";
import { PersonSimpleTaiChiBoldIcon } from "../bold/person-simple-tai-chi-bold.icon";
import { PersonSimpleTaiChiDuotoneIcon } from "../duotone/person-simple-tai-chi-duotone.icon";
import { PersonSimpleTaiChiFillIcon } from "../fill/person-simple-tai-chi-fill.icon";
import { PersonSimpleTaiChiLightIcon } from "../light/person-simple-tai-chi-light.icon";
import { PersonSimpleTaiChiRegularIcon } from "../regular/person-simple-tai-chi-regular.icon";
import { PersonSimpleTaiChiThinIcon } from "../thin/person-simple-tai-chi-thin.icon";

export const PersonSimpleTaiChiIcon = createIcon("PersonSimpleTaiChi", {
  bold: PersonSimpleTaiChiBoldIcon,
  duotone: PersonSimpleTaiChiDuotoneIcon,
  fill: PersonSimpleTaiChiFillIcon,
  light: PersonSimpleTaiChiLightIcon,
  regular: PersonSimpleTaiChiRegularIcon,
  thin: PersonSimpleTaiChiThinIcon,
});
