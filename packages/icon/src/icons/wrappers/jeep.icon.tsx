import { createIcon } from "../../hocs/create-icon.hoc";
import { JeepBoldIcon } from "../bold/jeep-bold.icon";
import { JeepDuotoneIcon } from "../duotone/jeep-duotone.icon";
import { JeepFillIcon } from "../fill/jeep-fill.icon";
import { JeepLightIcon } from "../light/jeep-light.icon";
import { JeepRegularIcon } from "../regular/jeep-regular.icon";
import { JeepThinIcon } from "../thin/jeep-thin.icon";

export const JeepIcon = createIcon("Jeep", {
  bold: JeepBoldIcon,
  duotone: JeepDuotoneIcon,
  fill: JeepFillIcon,
  light: JeepLightIcon,
  regular: JeepRegularIcon,
  thin: JeepThinIcon,
});
