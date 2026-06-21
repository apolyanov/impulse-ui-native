import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UniteSquareBoldIcon } from "../bold";
import { UniteSquareDuotoneIcon } from "../duotone";
import { UniteSquareFillIcon } from "../fill";
import { UniteSquareLightIcon } from "../light";
import { UniteSquareRegularIcon } from "../regular";
import { UniteSquareThinIcon } from "../thin";

export const UniteSquareIcon = memo(function UniteSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UniteSquareBoldIcon,
      duotone: UniteSquareDuotoneIcon,
      fill: UniteSquareFillIcon,
      light: UniteSquareLightIcon,
      regular: UniteSquareRegularIcon,
      thin: UniteSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
