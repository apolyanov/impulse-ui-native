import { createIcon } from "../../hocs/create-icon.hoc";
import { BookmarkBoldIcon } from "../bold/bookmark-bold.icon";
import { BookmarkDuotoneIcon } from "../duotone/bookmark-duotone.icon";
import { BookmarkFillIcon } from "../fill/bookmark-fill.icon";
import { BookmarkLightIcon } from "../light/bookmark-light.icon";
import { BookmarkRegularIcon } from "../regular/bookmark-regular.icon";
import { BookmarkThinIcon } from "../thin/bookmark-thin.icon";

export const BookmarkIcon = createIcon("Bookmark", {
  bold: BookmarkBoldIcon,
  duotone: BookmarkDuotoneIcon,
  fill: BookmarkFillIcon,
  light: BookmarkLightIcon,
  regular: BookmarkRegularIcon,
  thin: BookmarkThinIcon,
});
