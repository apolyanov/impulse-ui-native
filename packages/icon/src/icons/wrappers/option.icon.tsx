import { createIcon } from "../../hocs/create-icon.hoc";
import { OptionBoldIcon } from "../bold/option-bold.icon";
import { OptionDuotoneIcon } from "../duotone/option-duotone.icon";
import { OptionFillIcon } from "../fill/option-fill.icon";
import { OptionLightIcon } from "../light/option-light.icon";
import { OptionRegularIcon } from "../regular/option-regular.icon";
import { OptionThinIcon } from "../thin/option-thin.icon";

export const OptionIcon = createIcon("Option", {
  bold: OptionBoldIcon,
  duotone: OptionDuotoneIcon,
  fill: OptionFillIcon,
  light: OptionLightIcon,
  regular: OptionRegularIcon,
  thin: OptionThinIcon,
});
