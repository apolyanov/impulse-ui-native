import { createIcon } from "../../hocs/create-icon.hoc";
import { BookUserBoldIcon } from "../bold/book-user-bold.icon";
import { BookUserDuotoneIcon } from "../duotone/book-user-duotone.icon";
import { BookUserFillIcon } from "../fill/book-user-fill.icon";
import { BookUserLightIcon } from "../light/book-user-light.icon";
import { BookUserRegularIcon } from "../regular/book-user-regular.icon";
import { BookUserThinIcon } from "../thin/book-user-thin.icon";

export const BookUserIcon = createIcon("BookUser", {
  bold: BookUserBoldIcon,
  duotone: BookUserDuotoneIcon,
  fill: BookUserFillIcon,
  light: BookUserLightIcon,
  regular: BookUserRegularIcon,
  thin: BookUserThinIcon,
});
