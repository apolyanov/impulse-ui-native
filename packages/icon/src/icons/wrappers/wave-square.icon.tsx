import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveSquareBoldIcon } from "../bold/wave-square-bold.icon";
import { WaveSquareDuotoneIcon } from "../duotone/wave-square-duotone.icon";
import { WaveSquareFillIcon } from "../fill/wave-square-fill.icon";
import { WaveSquareLightIcon } from "../light/wave-square-light.icon";
import { WaveSquareRegularIcon } from "../regular/wave-square-regular.icon";
import { WaveSquareThinIcon } from "../thin/wave-square-thin.icon";

export const WaveSquareIcon = memo(function WaveSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSquareBoldIcon,
      duotone: WaveSquareDuotoneIcon,
      fill: WaveSquareFillIcon,
      light: WaveSquareLightIcon,
      regular: WaveSquareRegularIcon,
      thin: WaveSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
