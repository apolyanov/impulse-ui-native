import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveSquareBold } from "../bold";
import { WaveSquareDuotone } from "../duotone";
import { WaveSquareFill } from "../fill";
import { WaveSquareLight } from "../light";
import { WaveSquareRegular } from "../regular";
import { WaveSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveSquare = memo(function WaveSquare(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSquareBold,
      duotone: WaveSquareDuotone,
      fill: WaveSquareFill,
      light: WaveSquareLight,
      regular: WaveSquareRegular,
      thin: WaveSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
