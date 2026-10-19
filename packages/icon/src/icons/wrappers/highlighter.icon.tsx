import { createIcon } from "../../hocs/create-icon.hoc";
import { HighlighterBoldIcon } from "../bold/highlighter-bold.icon";
import { HighlighterDuotoneIcon } from "../duotone/highlighter-duotone.icon";
import { HighlighterFillIcon } from "../fill/highlighter-fill.icon";
import { HighlighterLightIcon } from "../light/highlighter-light.icon";
import { HighlighterRegularIcon } from "../regular/highlighter-regular.icon";
import { HighlighterThinIcon } from "../thin/highlighter-thin.icon";

export const HighlighterIcon = createIcon("Highlighter", {
  bold: HighlighterBoldIcon,
  duotone: HighlighterDuotoneIcon,
  fill: HighlighterFillIcon,
  light: HighlighterLightIcon,
  regular: HighlighterRegularIcon,
  thin: HighlighterThinIcon,
});
