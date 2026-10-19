import { createIcon } from "../../hocs/create-icon.hoc";
import { SimCardBoldIcon } from "../bold/sim-card-bold.icon";
import { SimCardDuotoneIcon } from "../duotone/sim-card-duotone.icon";
import { SimCardFillIcon } from "../fill/sim-card-fill.icon";
import { SimCardLightIcon } from "../light/sim-card-light.icon";
import { SimCardRegularIcon } from "../regular/sim-card-regular.icon";
import { SimCardThinIcon } from "../thin/sim-card-thin.icon";

export const SimCardIcon = createIcon("SimCard", {
  bold: SimCardBoldIcon,
  duotone: SimCardDuotoneIcon,
  fill: SimCardFillIcon,
  light: SimCardLightIcon,
  regular: SimCardRegularIcon,
  thin: SimCardThinIcon,
});
