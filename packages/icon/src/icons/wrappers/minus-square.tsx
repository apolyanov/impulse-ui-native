import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusSquareBold } from "../bold";
import { MinusSquareDuotone } from "../duotone";
import { MinusSquareFill } from "../fill";
import { MinusSquareLight } from "../light";
import { MinusSquareRegular } from "../regular";
import { MinusSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MinusSquare = memo(function MinusSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusSquareBold,
      duotone: MinusSquareDuotone,
      fill: MinusSquareFill,
      light: MinusSquareLight,
      regular: MinusSquareRegular,
      thin: MinusSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
