import { createIcon } from "../../hocs/create-icon.hoc";
import { CookieBoldIcon } from "../bold/cookie-bold.icon";
import { CookieDuotoneIcon } from "../duotone/cookie-duotone.icon";
import { CookieFillIcon } from "../fill/cookie-fill.icon";
import { CookieLightIcon } from "../light/cookie-light.icon";
import { CookieRegularIcon } from "../regular/cookie-regular.icon";
import { CookieThinIcon } from "../thin/cookie-thin.icon";

export const CookieIcon = createIcon("Cookie", {
  bold: CookieBoldIcon,
  duotone: CookieDuotoneIcon,
  fill: CookieFillIcon,
  light: CookieLightIcon,
  regular: CookieRegularIcon,
  thin: CookieThinIcon,
});
