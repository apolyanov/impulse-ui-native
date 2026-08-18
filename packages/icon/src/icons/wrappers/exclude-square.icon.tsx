import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExcludeSquareBoldIcon } from "../bold/exclude-square-bold.icon";
import { ExcludeSquareDuotoneIcon } from "../duotone/exclude-square-duotone.icon";
import { ExcludeSquareFillIcon } from "../fill/exclude-square-fill.icon";
import { ExcludeSquareLightIcon } from "../light/exclude-square-light.icon";
import { ExcludeSquareRegularIcon } from "../regular/exclude-square-regular.icon";
import { ExcludeSquareThinIcon } from "../thin/exclude-square-thin.icon";

export const ExcludeSquareIcon = memo(function ExcludeSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExcludeSquareBoldIcon,
      duotone: ExcludeSquareDuotoneIcon,
      fill: ExcludeSquareFillIcon,
      light: ExcludeSquareLightIcon,
      regular: ExcludeSquareRegularIcon,
      thin: ExcludeSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
