import { createIcon } from "../../hocs/create-icon.hoc";
import { BookmarkSimpleBoldIcon } from "../bold/bookmark-simple-bold.icon";
import { BookmarkSimpleDuotoneIcon } from "../duotone/bookmark-simple-duotone.icon";
import { BookmarkSimpleFillIcon } from "../fill/bookmark-simple-fill.icon";
import { BookmarkSimpleLightIcon } from "../light/bookmark-simple-light.icon";
import { BookmarkSimpleRegularIcon } from "../regular/bookmark-simple-regular.icon";
import { BookmarkSimpleThinIcon } from "../thin/bookmark-simple-thin.icon";

export const BookmarkSimpleIcon = createIcon("BookmarkSimple", {
  bold: BookmarkSimpleBoldIcon,
  duotone: BookmarkSimpleDuotoneIcon,
  fill: BookmarkSimpleFillIcon,
  light: BookmarkSimpleLightIcon,
  regular: BookmarkSimpleRegularIcon,
  thin: BookmarkSimpleThinIcon,
});
