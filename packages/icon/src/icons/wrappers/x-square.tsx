import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XSquareBold } from "../bold";
import { XSquareDuotone } from "../duotone";
import { XSquareFill } from "../fill";
import { XSquareLight } from "../light";
import { XSquareRegular } from "../regular";
import { XSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XSquare = memo(function XSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XSquareBold,
      duotone: XSquareDuotone,
      fill: XSquareFill,
      light: XSquareLight,
      regular: XSquareRegular,
      thin: XSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
