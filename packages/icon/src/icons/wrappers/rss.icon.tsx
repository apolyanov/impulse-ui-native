import { createIcon } from "../../hocs/create-icon.hoc";
import { RssBoldIcon } from "../bold/rss-bold.icon";
import { RssDuotoneIcon } from "../duotone/rss-duotone.icon";
import { RssFillIcon } from "../fill/rss-fill.icon";
import { RssLightIcon } from "../light/rss-light.icon";
import { RssRegularIcon } from "../regular/rss-regular.icon";
import { RssThinIcon } from "../thin/rss-thin.icon";

export const RssIcon = createIcon("Rss", {
  bold: RssBoldIcon,
  duotone: RssDuotoneIcon,
  fill: RssFillIcon,
  light: RssLightIcon,
  regular: RssRegularIcon,
  thin: RssThinIcon,
});
