import { createIcon } from "../../hocs/create-icon.hoc";
import { ShuffleAngularBoldIcon } from "../bold/shuffle-angular-bold.icon";
import { ShuffleAngularDuotoneIcon } from "../duotone/shuffle-angular-duotone.icon";
import { ShuffleAngularFillIcon } from "../fill/shuffle-angular-fill.icon";
import { ShuffleAngularLightIcon } from "../light/shuffle-angular-light.icon";
import { ShuffleAngularRegularIcon } from "../regular/shuffle-angular-regular.icon";
import { ShuffleAngularThinIcon } from "../thin/shuffle-angular-thin.icon";

export const ShuffleAngularIcon = createIcon("ShuffleAngular", {
  bold: ShuffleAngularBoldIcon,
  duotone: ShuffleAngularDuotoneIcon,
  fill: ShuffleAngularFillIcon,
  light: ShuffleAngularLightIcon,
  regular: ShuffleAngularRegularIcon,
  thin: ShuffleAngularThinIcon,
});
