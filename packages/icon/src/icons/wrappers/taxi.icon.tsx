import { createIcon } from "../../hocs/create-icon.hoc";
import { TaxiBoldIcon } from "../bold/taxi-bold.icon";
import { TaxiDuotoneIcon } from "../duotone/taxi-duotone.icon";
import { TaxiFillIcon } from "../fill/taxi-fill.icon";
import { TaxiLightIcon } from "../light/taxi-light.icon";
import { TaxiRegularIcon } from "../regular/taxi-regular.icon";
import { TaxiThinIcon } from "../thin/taxi-thin.icon";

export const TaxiIcon = createIcon("Taxi", {
  bold: TaxiBoldIcon,
  duotone: TaxiDuotoneIcon,
  fill: TaxiFillIcon,
  light: TaxiLightIcon,
  regular: TaxiRegularIcon,
  thin: TaxiThinIcon,
});
