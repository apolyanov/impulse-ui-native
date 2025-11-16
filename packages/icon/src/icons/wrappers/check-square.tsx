import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckSquareBold } from "../bold";
import { CheckSquareDuotone } from "../duotone";
import { CheckSquareFill } from "../fill";
import { CheckSquareLight } from "../light";
import { CheckSquareRegular } from "../regular";
import { CheckSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CheckSquare = memo(function CheckSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckSquareBold,
      duotone: CheckSquareDuotone,
      fill: CheckSquareFill,
      light: CheckSquareLight,
      regular: CheckSquareRegular,
      thin: CheckSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
