import { createIcon } from "../../hocs/create-icon.hoc";
import { BookOpenTextBoldIcon } from "../bold/book-open-text-bold.icon";
import { BookOpenTextDuotoneIcon } from "../duotone/book-open-text-duotone.icon";
import { BookOpenTextFillIcon } from "../fill/book-open-text-fill.icon";
import { BookOpenTextLightIcon } from "../light/book-open-text-light.icon";
import { BookOpenTextRegularIcon } from "../regular/book-open-text-regular.icon";
import { BookOpenTextThinIcon } from "../thin/book-open-text-thin.icon";

export const BookOpenTextIcon = createIcon("BookOpenText", {
  bold: BookOpenTextBoldIcon,
  duotone: BookOpenTextDuotoneIcon,
  fill: BookOpenTextFillIcon,
  light: BookOpenTextLightIcon,
  regular: BookOpenTextRegularIcon,
  thin: BookOpenTextThinIcon,
});
