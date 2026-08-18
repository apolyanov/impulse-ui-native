import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveTriangleBoldIcon } from "../bold/wave-triangle-bold.icon";
import { WaveTriangleDuotoneIcon } from "../duotone/wave-triangle-duotone.icon";
import { WaveTriangleFillIcon } from "../fill/wave-triangle-fill.icon";
import { WaveTriangleLightIcon } from "../light/wave-triangle-light.icon";
import { WaveTriangleRegularIcon } from "../regular/wave-triangle-regular.icon";
import { WaveTriangleThinIcon } from "../thin/wave-triangle-thin.icon";

export const WaveTriangleIcon = memo(function WaveTriangle(
  props: IconWrapperProps,
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
