import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UniteSquareBold } from "../bold";
import { UniteSquareDuotone } from "../duotone";
import { UniteSquareFill } from "../fill";
import { UniteSquareLight } from "../light";
import { UniteSquareRegular } from "../regular";
import { UniteSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UniteSquare = memo(function UniteSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UniteSquareBold,
      duotone: UniteSquareDuotone,
      fill: UniteSquareFill,
      light: UniteSquareLight,
      regular: UniteSquareRegular,
      thin: UniteSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
