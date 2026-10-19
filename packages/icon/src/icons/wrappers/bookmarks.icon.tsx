import { createIcon } from "../../hocs/create-icon.hoc";
import { BookmarksBoldIcon } from "../bold/bookmarks-bold.icon";
import { BookmarksDuotoneIcon } from "../duotone/bookmarks-duotone.icon";
import { BookmarksFillIcon } from "../fill/bookmarks-fill.icon";
import { BookmarksLightIcon } from "../light/bookmarks-light.icon";
import { BookmarksRegularIcon } from "../regular/bookmarks-regular.icon";
import { BookmarksThinIcon } from "../thin/bookmarks-thin.icon";

export const BookmarksIcon = createIcon("Bookmarks", {
  bold: BookmarksBoldIcon,
  duotone: BookmarksDuotoneIcon,
  fill: BookmarksFillIcon,
  light: BookmarksLightIcon,
  regular: BookmarksRegularIcon,
  thin: BookmarksThinIcon,
});
