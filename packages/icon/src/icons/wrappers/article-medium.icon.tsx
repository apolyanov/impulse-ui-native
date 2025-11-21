import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArticleMediumBoldIcon } from "../bold";
import { ArticleMediumDuotoneIcon } from "../duotone";
import { ArticleMediumFillIcon } from "../fill";
import { ArticleMediumLightIcon } from "../light";
import { ArticleMediumRegularIcon } from "../regular";
import { ArticleMediumThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArticleMediumIcon = memo(function ArticleMedium(
  props: IconWrapperProps
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
