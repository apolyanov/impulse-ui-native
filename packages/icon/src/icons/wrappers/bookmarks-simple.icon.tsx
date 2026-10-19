import { createIcon } from "../../hocs/create-icon.hoc";
import { BookmarksSimpleBoldIcon } from "../bold/bookmarks-simple-bold.icon";
import { BookmarksSimpleDuotoneIcon } from "../duotone/bookmarks-simple-duotone.icon";
import { BookmarksSimpleFillIcon } from "../fill/bookmarks-simple-fill.icon";
import { BookmarksSimpleLightIcon } from "../light/bookmarks-simple-light.icon";
import { BookmarksSimpleRegularIcon } from "../regular/bookmarks-simple-regular.icon";
import { BookmarksSimpleThinIcon } from "../thin/bookmarks-simple-thin.icon";

export const BookmarksSimpleIcon = createIcon("BookmarksSimple", {
  bold: BookmarksSimpleBoldIcon,
  duotone: BookmarksSimpleDuotoneIcon,
  fill: BookmarksSimpleFillIcon,
  light: BookmarksSimpleLightIcon,
  regular: BookmarksSimpleRegularIcon,
  thin: BookmarksSimpleThinIcon,
});
