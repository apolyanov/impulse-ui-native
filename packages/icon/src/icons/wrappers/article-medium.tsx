import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArticleMediumBold } from "../bold";
import { ArticleMediumDuotone } from "../duotone";
import { ArticleMediumFill } from "../fill";
import { ArticleMediumLight } from "../light";
import { ArticleMediumRegular } from "../regular";
import { ArticleMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArticleMedium = memo(function ArticleMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArticleMediumBold,
      duotone: ArticleMediumDuotone,
      fill: ArticleMediumFill,
      light: ArticleMediumLight,
      regular: ArticleMediumRegular,
      thin: ArticleMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
