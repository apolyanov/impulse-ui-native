import { createIcon } from "../../hocs/create-icon.hoc";
import { BookOpenBoldIcon } from "../bold/book-open-bold.icon";
import { BookOpenDuotoneIcon } from "../duotone/book-open-duotone.icon";
import { BookOpenFillIcon } from "../fill/book-open-fill.icon";
import { BookOpenLightIcon } from "../light/book-open-light.icon";
import { BookOpenRegularIcon } from "../regular/book-open-regular.icon";
import { BookOpenThinIcon } from "../thin/book-open-thin.icon";

export const BookOpenIcon = createIcon("BookOpen", {
  bold: BookOpenBoldIcon,
  duotone: BookOpenDuotoneIcon,
  fill: BookOpenFillIcon,
  light: BookOpenLightIcon,
  regular: BookOpenRegularIcon,
  thin: BookOpenThinIcon,
});
