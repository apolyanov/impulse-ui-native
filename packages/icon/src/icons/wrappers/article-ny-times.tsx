import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArticleNyTimesBold } from "../bold";
import { ArticleNyTimesDuotone } from "../duotone";
import { ArticleNyTimesFill } from "../fill";
import { ArticleNyTimesLight } from "../light";
import { ArticleNyTimesRegular } from "../regular";
import { ArticleNyTimesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArticleNyTimes = memo(function ArticleNyTimes(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleNyTimesBold,
      duotone: ArticleNyTimesDuotone,
      fill: ArticleNyTimesFill,
      light: ArticleNyTimesLight,
      regular: ArticleNyTimesRegular,
      thin: ArticleNyTimesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
