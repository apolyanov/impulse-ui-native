import { createIcon } from "../../hocs/create-icon.hoc";
import { RadioButtonBoldIcon } from "../bold/radio-button-bold.icon";
import { RadioButtonDuotoneIcon } from "../duotone/radio-button-duotone.icon";
import { RadioButtonFillIcon } from "../fill/radio-button-fill.icon";
import { RadioButtonLightIcon } from "../light/radio-button-light.icon";
import { RadioButtonRegularIcon } from "../regular/radio-button-regular.icon";
import { RadioButtonThinIcon } from "../thin/radio-button-thin.icon";

export const RadioButtonIcon = createIcon("RadioButton", {
  bold: RadioButtonBoldIcon,
  duotone: RadioButtonDuotoneIcon,
  fill: RadioButtonFillIcon,
  light: RadioButtonLightIcon,
  regular: RadioButtonRegularIcon,
  thin: RadioButtonThinIcon,
});
