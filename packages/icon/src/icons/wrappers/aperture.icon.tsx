import { createIcon } from "../../hocs/create-icon.hoc";
import { ApertureBoldIcon } from "../bold/aperture-bold.icon";
import { ApertureDuotoneIcon } from "../duotone/aperture-duotone.icon";
import { ApertureFillIcon } from "../fill/aperture-fill.icon";
import { ApertureLightIcon } from "../light/aperture-light.icon";
import { ApertureRegularIcon } from "../regular/aperture-regular.icon";
import { ApertureThinIcon } from "../thin/aperture-thin.icon";

export const ApertureIcon = createIcon("Aperture", {
  bold: ApertureBoldIcon,
  duotone: ApertureDuotoneIcon,
  fill: ApertureFillIcon,
  light: ApertureLightIcon,
  regular: ApertureRegularIcon,
  thin: ApertureThinIcon,
});
