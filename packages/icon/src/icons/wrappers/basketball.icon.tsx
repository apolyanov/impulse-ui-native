import { createIcon } from "../../hocs/create-icon.hoc";
import { BasketballBoldIcon } from "../bold/basketball-bold.icon";
import { BasketballDuotoneIcon } from "../duotone/basketball-duotone.icon";
import { BasketballFillIcon } from "../fill/basketball-fill.icon";
import { BasketballLightIcon } from "../light/basketball-light.icon";
import { BasketballRegularIcon } from "../regular/basketball-regular.icon";
import { BasketballThinIcon } from "../thin/basketball-thin.icon";

export const BasketballIcon = createIcon("Basketball", {
  bold: BasketballBoldIcon,
  duotone: BasketballDuotoneIcon,
  fill: BasketballFillIcon,
  light: BasketballLightIcon,
  regular: BasketballRegularIcon,
  thin: BasketballThinIcon,
});
