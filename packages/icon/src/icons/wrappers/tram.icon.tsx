import { createIcon } from "../../hocs/create-icon.hoc";
import { TramBoldIcon } from "../bold/tram-bold.icon";
import { TramDuotoneIcon } from "../duotone/tram-duotone.icon";
import { TramFillIcon } from "../fill/tram-fill.icon";
import { TramLightIcon } from "../light/tram-light.icon";
import { TramRegularIcon } from "../regular/tram-regular.icon";
import { TramThinIcon } from "../thin/tram-thin.icon";

export const TramIcon = createIcon("Tram", {
  bold: TramBoldIcon,
  duotone: TramDuotoneIcon,
  fill: TramFillIcon,
  light: TramLightIcon,
  regular: TramRegularIcon,
  thin: TramThinIcon,
});
