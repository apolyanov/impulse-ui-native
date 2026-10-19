import { createIcon } from "../../hocs/create-icon.hoc";
import { BookBoldIcon } from "../bold/book-bold.icon";
import { BookDuotoneIcon } from "../duotone/book-duotone.icon";
import { BookFillIcon } from "../fill/book-fill.icon";
import { BookLightIcon } from "../light/book-light.icon";
import { BookRegularIcon } from "../regular/book-regular.icon";
import { BookThinIcon } from "../thin/book-thin.icon";

export const BookIcon = createIcon("Book", {
  bold: BookBoldIcon,
  duotone: BookDuotoneIcon,
  fill: BookFillIcon,
  light: BookLightIcon,
  regular: BookRegularIcon,
  thin: BookThinIcon,
});
