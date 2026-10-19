import { createIcon } from "../../hocs/create-icon.hoc";
import { BookBookmarkBoldIcon } from "../bold/book-bookmark-bold.icon";
import { BookBookmarkDuotoneIcon } from "../duotone/book-bookmark-duotone.icon";
import { BookBookmarkFillIcon } from "../fill/book-bookmark-fill.icon";
import { BookBookmarkLightIcon } from "../light/book-bookmark-light.icon";
import { BookBookmarkRegularIcon } from "../regular/book-bookmark-regular.icon";
import { BookBookmarkThinIcon } from "../thin/book-bookmark-thin.icon";

export const BookBookmarkIcon = createIcon("BookBookmark", {
  bold: BookBookmarkBoldIcon,
  duotone: BookBookmarkDuotoneIcon,
  fill: BookBookmarkFillIcon,
  light: BookBookmarkLightIcon,
  regular: BookBookmarkRegularIcon,
  thin: BookBookmarkThinIcon,
});
