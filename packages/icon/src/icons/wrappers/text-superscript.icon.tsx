import { createIcon } from "../../hocs/create-icon.hoc";
import { TextSuperscriptBoldIcon } from "../bold/text-superscript-bold.icon";
import { TextSuperscriptDuotoneIcon } from "../duotone/text-superscript-duotone.icon";
import { TextSuperscriptFillIcon } from "../fill/text-superscript-fill.icon";
import { TextSuperscriptLightIcon } from "../light/text-superscript-light.icon";
import { TextSuperscriptRegularIcon } from "../regular/text-superscript-regular.icon";
import { TextSuperscriptThinIcon } from "../thin/text-superscript-thin.icon";

export const TextSuperscriptIcon = createIcon("TextSuperscript", {
  bold: TextSuperscriptBoldIcon,
  duotone: TextSuperscriptDuotoneIcon,
  fill: TextSuperscriptFillIcon,
  light: TextSuperscriptLightIcon,
  regular: TextSuperscriptRegularIcon,
  thin: TextSuperscriptThinIcon,
});
