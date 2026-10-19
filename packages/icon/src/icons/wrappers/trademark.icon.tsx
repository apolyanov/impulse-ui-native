import { createIcon } from "../../hocs/create-icon.hoc";
import { TrademarkBoldIcon } from "../bold/trademark-bold.icon";
import { TrademarkDuotoneIcon } from "../duotone/trademark-duotone.icon";
import { TrademarkFillIcon } from "../fill/trademark-fill.icon";
import { TrademarkLightIcon } from "../light/trademark-light.icon";
import { TrademarkRegularIcon } from "../regular/trademark-regular.icon";
import { TrademarkThinIcon } from "../thin/trademark-thin.icon";

export const TrademarkIcon = createIcon("Trademark", {
  bold: TrademarkBoldIcon,
  duotone: TrademarkDuotoneIcon,
  fill: TrademarkFillIcon,
  light: TrademarkLightIcon,
  regular: TrademarkRegularIcon,
  thin: TrademarkThinIcon,
});
