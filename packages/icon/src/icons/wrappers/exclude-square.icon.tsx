import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExcludeSquareBoldIcon } from "../bold";
import { ExcludeSquareDuotoneIcon } from "../duotone";
import { ExcludeSquareFillIcon } from "../fill";
import { ExcludeSquareLightIcon } from "../light";
import { ExcludeSquareRegularIcon } from "../regular";
import { ExcludeSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ExcludeSquareIcon = memo(function ExcludeSquare(
  props: IconWrapperProps
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
