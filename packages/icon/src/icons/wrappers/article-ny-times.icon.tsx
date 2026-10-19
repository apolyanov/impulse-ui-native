import { createIcon } from "../../hocs/create-icon.hoc";
import { ArticleNyTimesBoldIcon } from "../bold/article-ny-times-bold.icon";
import { ArticleNyTimesDuotoneIcon } from "../duotone/article-ny-times-duotone.icon";
import { ArticleNyTimesFillIcon } from "../fill/article-ny-times-fill.icon";
import { ArticleNyTimesLightIcon } from "../light/article-ny-times-light.icon";
import { ArticleNyTimesRegularIcon } from "../regular/article-ny-times-regular.icon";
import { ArticleNyTimesThinIcon } from "../thin/article-ny-times-thin.icon";

export const ArticleNyTimesIcon = createIcon("ArticleNyTimes", {
  bold: ArticleNyTimesBoldIcon,
  duotone: ArticleNyTimesDuotoneIcon,
  fill: ArticleNyTimesFillIcon,
  light: ArticleNyTimesLightIcon,
  regular: ArticleNyTimesRegularIcon,
  thin: ArticleNyTimesThinIcon,
});
