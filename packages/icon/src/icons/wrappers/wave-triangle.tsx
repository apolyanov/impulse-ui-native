import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveTriangleBold } from "../bold";
import { WaveTriangleDuotone } from "../duotone";
import { WaveTriangleFill } from "../fill";
import { WaveTriangleLight } from "../light";
import { WaveTriangleRegular } from "../regular";
import { WaveTriangleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveTriangle = memo(function WaveTriangle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveTriangleBold,
      duotone: WaveTriangleDuotone,
      fill: WaveTriangleFill,
      light: WaveTriangleLight,
      regular: WaveTriangleRegular,
      thin: WaveTriangleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
