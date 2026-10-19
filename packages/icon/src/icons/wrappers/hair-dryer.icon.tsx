import { createIcon } from "../../hocs/create-icon.hoc";
import { HairDryerBoldIcon } from "../bold/hair-dryer-bold.icon";
import { HairDryerDuotoneIcon } from "../duotone/hair-dryer-duotone.icon";
import { HairDryerFillIcon } from "../fill/hair-dryer-fill.icon";
import { HairDryerLightIcon } from "../light/hair-dryer-light.icon";
import { HairDryerRegularIcon } from "../regular/hair-dryer-regular.icon";
import { HairDryerThinIcon } from "../thin/hair-dryer-thin.icon";

export const HairDryerIcon = createIcon("HairDryer", {
  bold: HairDryerBoldIcon,
  duotone: HairDryerDuotoneIcon,
  fill: HairDryerFillIcon,
  light: HairDryerLightIcon,
  regular: HairDryerRegularIcon,
  thin: HairDryerThinIcon,
});
