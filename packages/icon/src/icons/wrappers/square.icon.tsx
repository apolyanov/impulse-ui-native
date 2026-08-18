import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SquareBoldIcon } from "../bold/square-bold.icon";
import { SquareDuotoneIcon } from "../duotone/square-duotone.icon";
import { SquareFillIcon } from "../fill/square-fill.icon";
import { SquareLightIcon } from "../light/square-light.icon";
import { SquareRegularIcon } from "../regular/square-regular.icon";
import { SquareThinIcon } from "../thin/square-thin.icon";

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
