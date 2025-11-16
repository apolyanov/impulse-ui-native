import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquaresFourBold } from "../bold";
import { SquaresFourDuotone } from "../duotone";
import { SquaresFourFill } from "../fill";
import { SquaresFourLight } from "../light";
import { SquaresFourRegular } from "../regular";
import { SquaresFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquaresFour = memo(function SquaresFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquaresFourBold,
      duotone: SquaresFourDuotone,
      fill: SquaresFourFill,
      light: SquaresFourLight,
      regular: SquaresFourRegular,
      thin: SquaresFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
