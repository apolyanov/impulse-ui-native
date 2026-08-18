import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArticleNyTimesBoldIcon } from "../bold/article-ny-times-bold.icon";
import { ArticleNyTimesDuotoneIcon } from "../duotone/article-ny-times-duotone.icon";
import { ArticleNyTimesFillIcon } from "../fill/article-ny-times-fill.icon";
import { ArticleNyTimesLightIcon } from "../light/article-ny-times-light.icon";
import { ArticleNyTimesRegularIcon } from "../regular/article-ny-times-regular.icon";
import { ArticleNyTimesThinIcon } from "../thin/article-ny-times-thin.icon";

export const ArticleNyTimesIcon = memo(function ArticleNyTimes(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleNyTimesBoldIcon,
      duotone: ArticleNyTimesDuotoneIcon,
      fill: ArticleNyTimesFillIcon,
      light: ArticleNyTimesLightIcon,
      regular: ArticleNyTimesRegularIcon,
      thin: ArticleNyTimesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
