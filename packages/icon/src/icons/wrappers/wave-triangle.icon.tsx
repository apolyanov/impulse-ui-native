import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveTriangleBoldIcon } from "../bold";
import { WaveTriangleDuotoneIcon } from "../duotone";
import { WaveTriangleFillIcon } from "../fill";
import { WaveTriangleLightIcon } from "../light";
import { WaveTriangleRegularIcon } from "../regular";
import { WaveTriangleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveTriangleIcon = memo(function WaveTriangle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveTriangleBoldIcon,
      duotone: WaveTriangleDuotoneIcon,
      fill: WaveTriangleFillIcon,
      light: WaveTriangleLightIcon,
      regular: WaveTriangleRegularIcon,
      thin: WaveTriangleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
