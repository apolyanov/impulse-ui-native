import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareBoldIcon } from "../bold";
import { SquareDuotoneIcon } from "../duotone";
import { SquareFillIcon } from "../fill";
import { SquareLightIcon } from "../light";
import { SquareRegularIcon } from "../regular";
import { SquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareIcon = memo(function Square(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareBoldIcon,
      duotone: SquareDuotoneIcon,
      fill: SquareFillIcon,
      light: SquareLightIcon,
      regular: SquareRegularIcon,
      thin: SquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
