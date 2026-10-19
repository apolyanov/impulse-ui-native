import { createIcon } from "../../hocs/create-icon.hoc";
import { ArticleBoldIcon } from "../bold/article-bold.icon";
import { ArticleDuotoneIcon } from "../duotone/article-duotone.icon";
import { ArticleFillIcon } from "../fill/article-fill.icon";
import { ArticleLightIcon } from "../light/article-light.icon";
import { ArticleRegularIcon } from "../regular/article-regular.icon";
import { ArticleThinIcon } from "../thin/article-thin.icon";

export const ArticleIcon = createIcon("Article", {
  bold: ArticleBoldIcon,
  duotone: ArticleDuotoneIcon,
  fill: ArticleFillIcon,
  light: ArticleLightIcon,
  regular: ArticleRegularIcon,
  thin: ArticleThinIcon,
});
