import { createIcon } from "../../hocs/create-icon.hoc";
import { TrademarkRegisteredBoldIcon } from "../bold/trademark-registered-bold.icon";
import { TrademarkRegisteredDuotoneIcon } from "../duotone/trademark-registered-duotone.icon";
import { TrademarkRegisteredFillIcon } from "../fill/trademark-registered-fill.icon";
import { TrademarkRegisteredLightIcon } from "../light/trademark-registered-light.icon";
import { TrademarkRegisteredRegularIcon } from "../regular/trademark-registered-regular.icon";
import { TrademarkRegisteredThinIcon } from "../thin/trademark-registered-thin.icon";

export const TrademarkRegisteredIcon = createIcon("TrademarkRegistered", {
  bold: TrademarkRegisteredBoldIcon,
  duotone: TrademarkRegisteredDuotoneIcon,
  fill: TrademarkRegisteredFillIcon,
  light: TrademarkRegisteredLightIcon,
  regular: TrademarkRegisteredRegularIcon,
  thin: TrademarkRegisteredThinIcon,
});
