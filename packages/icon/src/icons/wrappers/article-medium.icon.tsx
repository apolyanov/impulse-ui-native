import { createIcon } from "../../hocs/create-icon.hoc";
import { ArticleMediumBoldIcon } from "../bold/article-medium-bold.icon";
import { ArticleMediumDuotoneIcon } from "../duotone/article-medium-duotone.icon";
import { ArticleMediumFillIcon } from "../fill/article-medium-fill.icon";
import { ArticleMediumLightIcon } from "../light/article-medium-light.icon";
import { ArticleMediumRegularIcon } from "../regular/article-medium-regular.icon";
import { ArticleMediumThinIcon } from "../thin/article-medium-thin.icon";

export const ArticleMediumIcon = createIcon("ArticleMedium", {
  bold: ArticleMediumBoldIcon,
  duotone: ArticleMediumDuotoneIcon,
  fill: ArticleMediumFillIcon,
  light: ArticleMediumLightIcon,
  regular: ArticleMediumRegularIcon,
  thin: ArticleMediumThinIcon,
});
