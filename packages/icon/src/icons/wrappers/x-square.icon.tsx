import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { XSquareBoldIcon } from "../bold/x-square-bold.icon";
import { XSquareDuotoneIcon } from "../duotone/x-square-duotone.icon";
import { XSquareFillIcon } from "../fill/x-square-fill.icon";
import { XSquareLightIcon } from "../light/x-square-light.icon";
import { XSquareRegularIcon } from "../regular/x-square-regular.icon";
import { XSquareThinIcon } from "../thin/x-square-thin.icon";

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
