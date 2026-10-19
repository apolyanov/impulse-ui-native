import { createIcon } from "../../hocs/create-icon.hoc";
import { RssSimpleBoldIcon } from "../bold/rss-simple-bold.icon";
import { RssSimpleDuotoneIcon } from "../duotone/rss-simple-duotone.icon";
import { RssSimpleFillIcon } from "../fill/rss-simple-fill.icon";
import { RssSimpleLightIcon } from "../light/rss-simple-light.icon";
import { RssSimpleRegularIcon } from "../regular/rss-simple-regular.icon";
import { RssSimpleThinIcon } from "../thin/rss-simple-thin.icon";

export const RssSimpleIcon = createIcon("RssSimple", {
  bold: RssSimpleBoldIcon,
  duotone: RssSimpleDuotoneIcon,
  fill: RssSimpleFillIcon,
  light: RssSimpleLightIcon,
  regular: RssSimpleRegularIcon,
  thin: RssSimpleThinIcon,
});
