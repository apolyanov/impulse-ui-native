import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArticleBoldIcon } from "../bold/article-bold.icon";
import { ArticleDuotoneIcon } from "../duotone/article-duotone.icon";
import { ArticleFillIcon } from "../fill/article-fill.icon";
import { ArticleLightIcon } from "../light/article-light.icon";
import { ArticleRegularIcon } from "../regular/article-regular.icon";
import { ArticleThinIcon } from "../thin/article-thin.icon";

export const ArticleIcon = memo(function Article(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleBoldIcon,
      duotone: ArticleDuotoneIcon,
      fill: ArticleFillIcon,
      light: ArticleLightIcon,
      regular: ArticleRegularIcon,
      thin: ArticleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
