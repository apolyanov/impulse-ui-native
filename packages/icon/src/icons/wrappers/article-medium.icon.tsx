import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArticleMediumBoldIcon } from "../bold/article-medium-bold.icon";
import { ArticleMediumDuotoneIcon } from "../duotone/article-medium-duotone.icon";
import { ArticleMediumFillIcon } from "../fill/article-medium-fill.icon";
import { ArticleMediumLightIcon } from "../light/article-medium-light.icon";
import { ArticleMediumRegularIcon } from "../regular/article-medium-regular.icon";
import { ArticleMediumThinIcon } from "../thin/article-medium-thin.icon";

export const ArticleMediumIcon = memo(function ArticleMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleMediumBoldIcon,
      duotone: ArticleMediumDuotoneIcon,
      fill: ArticleMediumFillIcon,
      light: ArticleMediumLightIcon,
      regular: ArticleMediumRegularIcon,
      thin: ArticleMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
