import { createIcon } from "../../hocs/create-icon.hoc";
import { TextboxBoldIcon } from "../bold/textbox-bold.icon";
import { TextboxDuotoneIcon } from "../duotone/textbox-duotone.icon";
import { TextboxFillIcon } from "../fill/textbox-fill.icon";
import { TextboxLightIcon } from "../light/textbox-light.icon";
import { TextboxRegularIcon } from "../regular/textbox-regular.icon";
import { TextboxThinIcon } from "../thin/textbox-thin.icon";

export const TextboxIcon = createIcon("Textbox", {
  bold: TextboxBoldIcon,
  duotone: TextboxDuotoneIcon,
  fill: TextboxFillIcon,
  light: TextboxLightIcon,
  regular: TextboxRegularIcon,
  thin: TextboxThinIcon,
});
