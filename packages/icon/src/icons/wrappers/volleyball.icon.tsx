import { createIcon } from "../../hocs/create-icon.hoc";
import { VolleyballBoldIcon } from "../bold/volleyball-bold.icon";
import { VolleyballDuotoneIcon } from "../duotone/volleyball-duotone.icon";
import { VolleyballFillIcon } from "../fill/volleyball-fill.icon";
import { VolleyballLightIcon } from "../light/volleyball-light.icon";
import { VolleyballRegularIcon } from "../regular/volleyball-regular.icon";
import { VolleyballThinIcon } from "../thin/volleyball-thin.icon";

export const VolleyballIcon = createIcon("Volleyball", {
  bold: VolleyballBoldIcon,
  duotone: VolleyballDuotoneIcon,
  fill: VolleyballFillIcon,
  light: VolleyballLightIcon,
  regular: VolleyballRegularIcon,
  thin: VolleyballThinIcon,
});
