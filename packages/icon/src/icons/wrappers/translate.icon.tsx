import { createIcon } from "../../hocs/create-icon.hoc";
import { TranslateBoldIcon } from "../bold/translate-bold.icon";
import { TranslateDuotoneIcon } from "../duotone/translate-duotone.icon";
import { TranslateFillIcon } from "../fill/translate-fill.icon";
import { TranslateLightIcon } from "../light/translate-light.icon";
import { TranslateRegularIcon } from "../regular/translate-regular.icon";
import { TranslateThinIcon } from "../thin/translate-thin.icon";

export const TranslateIcon = createIcon("Translate", {
  bold: TranslateBoldIcon,
  duotone: TranslateDuotoneIcon,
  fill: TranslateFillIcon,
  light: TranslateLightIcon,
  regular: TranslateRegularIcon,
  thin: TranslateThinIcon,
});
