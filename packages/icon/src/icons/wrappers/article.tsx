import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArticleBold } from "../bold";
import { ArticleDuotone } from "../duotone";
import { ArticleFill } from "../fill";
import { ArticleLight } from "../light";
import { ArticleRegular } from "../regular";
import { ArticleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Article = memo(function Article(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleBold,
      duotone: ArticleDuotone,
      fill: ArticleFill,
      light: ArticleLight,
      regular: ArticleRegular,
      thin: ArticleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
