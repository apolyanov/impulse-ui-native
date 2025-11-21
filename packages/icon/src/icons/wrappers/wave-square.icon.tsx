import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveSquareBoldIcon } from "../bold";
import { WaveSquareDuotoneIcon } from "../duotone";
import { WaveSquareFillIcon } from "../fill";
import { WaveSquareLightIcon } from "../light";
import { WaveSquareRegularIcon } from "../regular";
import { WaveSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveSquareIcon = memo(function WaveSquare(
  props: IconWrapperProps
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
