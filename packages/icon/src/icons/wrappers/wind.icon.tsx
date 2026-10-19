import { createIcon } from "../../hocs/create-icon.hoc";
import { WindBoldIcon } from "../bold/wind-bold.icon";
import { WindDuotoneIcon } from "../duotone/wind-duotone.icon";
import { WindFillIcon } from "../fill/wind-fill.icon";
import { WindLightIcon } from "../light/wind-light.icon";
import { WindRegularIcon } from "../regular/wind-regular.icon";
import { WindThinIcon } from "../thin/wind-thin.icon";

export const WindIcon = createIcon("Wind", {
  bold: WindBoldIcon,
  duotone: WindDuotoneIcon,
  fill: WindFillIcon,
  light: WindLightIcon,
  regular: WindRegularIcon,
  thin: WindThinIcon,
});
