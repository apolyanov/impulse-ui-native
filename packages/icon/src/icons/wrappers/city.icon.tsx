import { createIcon } from "../../hocs/create-icon.hoc";
import { CityBoldIcon } from "../bold/city-bold.icon";
import { CityDuotoneIcon } from "../duotone/city-duotone.icon";
import { CityFillIcon } from "../fill/city-fill.icon";
import { CityLightIcon } from "../light/city-light.icon";
import { CityRegularIcon } from "../regular/city-regular.icon";
import { CityThinIcon } from "../thin/city-thin.icon";

export const CityIcon = createIcon("City", {
  bold: CityBoldIcon,
  duotone: CityDuotoneIcon,
  fill: CityFillIcon,
  light: CityLightIcon,
  regular: CityRegularIcon,
  thin: CityThinIcon,
});
