import { createIcon } from "../../hocs/create-icon.hoc";
import { GiftBoldIcon } from "../bold/gift-bold.icon";
import { GiftDuotoneIcon } from "../duotone/gift-duotone.icon";
import { GiftFillIcon } from "../fill/gift-fill.icon";
import { GiftLightIcon } from "../light/gift-light.icon";
import { GiftRegularIcon } from "../regular/gift-regular.icon";
import { GiftThinIcon } from "../thin/gift-thin.icon";

export const GiftIcon = createIcon("Gift", {
  bold: GiftBoldIcon,
  duotone: GiftDuotoneIcon,
  fill: GiftFillIcon,
  light: GiftLightIcon,
  regular: GiftRegularIcon,
  thin: GiftThinIcon,
});
