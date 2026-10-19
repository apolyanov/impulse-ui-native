import { createIcon } from "../../hocs/create-icon.hoc";
import { IdentificationCardBoldIcon } from "../bold/identification-card-bold.icon";
import { IdentificationCardDuotoneIcon } from "../duotone/identification-card-duotone.icon";
import { IdentificationCardFillIcon } from "../fill/identification-card-fill.icon";
import { IdentificationCardLightIcon } from "../light/identification-card-light.icon";
import { IdentificationCardRegularIcon } from "../regular/identification-card-regular.icon";
import { IdentificationCardThinIcon } from "../thin/identification-card-thin.icon";

export const IdentificationCardIcon = createIcon("IdentificationCard", {
  bold: IdentificationCardBoldIcon,
  duotone: IdentificationCardDuotoneIcon,
  fill: IdentificationCardFillIcon,
  light: IdentificationCardLightIcon,
  regular: IdentificationCardRegularIcon,
  thin: IdentificationCardThinIcon,
});
