import { createIcon } from "../../hocs/create-icon.hoc";
import { CarProfileBoldIcon } from "../bold/car-profile-bold.icon";
import { CarProfileDuotoneIcon } from "../duotone/car-profile-duotone.icon";
import { CarProfileFillIcon } from "../fill/car-profile-fill.icon";
import { CarProfileLightIcon } from "../light/car-profile-light.icon";
import { CarProfileRegularIcon } from "../regular/car-profile-regular.icon";
import { CarProfileThinIcon } from "../thin/car-profile-thin.icon";

export const CarProfileIcon = createIcon("CarProfile", {
  bold: CarProfileBoldIcon,
  duotone: CarProfileDuotoneIcon,
  fill: CarProfileFillIcon,
  light: CarProfileLightIcon,
  regular: CarProfileRegularIcon,
  thin: CarProfileThinIcon,
});
