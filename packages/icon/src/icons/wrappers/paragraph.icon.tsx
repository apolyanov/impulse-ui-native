import { createIcon } from "../../hocs/create-icon.hoc";
import { ParagraphBoldIcon } from "../bold/paragraph-bold.icon";
import { ParagraphDuotoneIcon } from "../duotone/paragraph-duotone.icon";
import { ParagraphFillIcon } from "../fill/paragraph-fill.icon";
import { ParagraphLightIcon } from "../light/paragraph-light.icon";
import { ParagraphRegularIcon } from "../regular/paragraph-regular.icon";
import { ParagraphThinIcon } from "../thin/paragraph-thin.icon";

export const ParagraphIcon = createIcon("Paragraph", {
  bold: ParagraphBoldIcon,
  duotone: ParagraphDuotoneIcon,
  fill: ParagraphFillIcon,
  light: ParagraphLightIcon,
  regular: ParagraphRegularIcon,
  thin: ParagraphThinIcon,
});
