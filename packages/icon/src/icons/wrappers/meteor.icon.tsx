import { createIcon } from "../../hocs/create-icon.hoc";
import { MeteorBoldIcon } from "../bold/meteor-bold.icon";
import { MeteorDuotoneIcon } from "../duotone/meteor-duotone.icon";
import { MeteorFillIcon } from "../fill/meteor-fill.icon";
import { MeteorLightIcon } from "../light/meteor-light.icon";
import { MeteorRegularIcon } from "../regular/meteor-regular.icon";
import { MeteorThinIcon } from "../thin/meteor-thin.icon";

export const MeteorIcon = createIcon("Meteor", {
  bold: MeteorBoldIcon,
  duotone: MeteorDuotoneIcon,
  fill: MeteorFillIcon,
  light: MeteorLightIcon,
  regular: MeteorRegularIcon,
  thin: MeteorThinIcon,
});
