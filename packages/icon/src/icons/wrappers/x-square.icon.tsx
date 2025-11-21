import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XSquareBoldIcon } from "../bold";
import { XSquareDuotoneIcon } from "../duotone";
import { XSquareFillIcon } from "../fill";
import { XSquareLightIcon } from "../light";
import { XSquareRegularIcon } from "../regular";
import { XSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XSquareIcon = memo(function XSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XSquareBoldIcon,
      duotone: XSquareDuotoneIcon,
      fill: XSquareFillIcon,
      light: XSquareLightIcon,
      regular: XSquareRegularIcon,
      thin: XSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
