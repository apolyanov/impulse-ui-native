import { createIcon } from "../../hocs/create-icon.hoc";
import { StrategyBoldIcon } from "../bold/strategy-bold.icon";
import { StrategyDuotoneIcon } from "../duotone/strategy-duotone.icon";
import { StrategyFillIcon } from "../fill/strategy-fill.icon";
import { StrategyLightIcon } from "../light/strategy-light.icon";
import { StrategyRegularIcon } from "../regular/strategy-regular.icon";
import { StrategyThinIcon } from "../thin/strategy-thin.icon";

export const StrategyIcon = createIcon("Strategy", {
  bold: StrategyBoldIcon,
  duotone: StrategyDuotoneIcon,
  fill: StrategyFillIcon,
  light: StrategyLightIcon,
  regular: StrategyRegularIcon,
  thin: StrategyThinIcon,
});
