import { createIcon } from "../../hocs/create-icon.hoc";
import { BooksBoldIcon } from "../bold/books-bold.icon";
import { BooksDuotoneIcon } from "../duotone/books-duotone.icon";
import { BooksFillIcon } from "../fill/books-fill.icon";
import { BooksLightIcon } from "../light/books-light.icon";
import { BooksRegularIcon } from "../regular/books-regular.icon";
import { BooksThinIcon } from "../thin/books-thin.icon";

export const BooksIcon = createIcon("Books", {
  bold: BooksBoldIcon,
  duotone: BooksDuotoneIcon,
  fill: BooksFillIcon,
  light: BooksLightIcon,
  regular: BooksRegularIcon,
  thin: BooksThinIcon,
});
