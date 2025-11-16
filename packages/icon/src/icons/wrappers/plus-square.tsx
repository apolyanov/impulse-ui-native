import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusSquareBold } from "../bold";
import { PlusSquareDuotone } from "../duotone";
import { PlusSquareFill } from "../fill";
import { PlusSquareLight } from "../light";
import { PlusSquareRegular } from "../regular";
import { PlusSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlusSquare = memo(function PlusSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusSquareBold,
      duotone: PlusSquareDuotone,
      fill: PlusSquareFill,
      light: PlusSquareLight,
      regular: PlusSquareRegular,
      thin: PlusSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
