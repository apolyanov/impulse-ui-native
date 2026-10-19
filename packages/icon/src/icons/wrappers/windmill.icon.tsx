import { createIcon } from "../../hocs/create-icon.hoc";
import { WindmillBoldIcon } from "../bold/windmill-bold.icon";
import { WindmillDuotoneIcon } from "../duotone/windmill-duotone.icon";
import { WindmillFillIcon } from "../fill/windmill-fill.icon";
import { WindmillLightIcon } from "../light/windmill-light.icon";
import { WindmillRegularIcon } from "../regular/windmill-regular.icon";
import { WindmillThinIcon } from "../thin/windmill-thin.icon";

export const WindmillIcon = createIcon("Windmill", {
  bold: WindmillBoldIcon,
  duotone: WindmillDuotoneIcon,
  fill: WindmillFillIcon,
  light: WindmillLightIcon,
  regular: WindmillRegularIcon,
  thin: WindmillThinIcon,
});
