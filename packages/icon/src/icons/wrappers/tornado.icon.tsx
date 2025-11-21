import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TornadoBoldIcon } from "../bold";
import { TornadoDuotoneIcon } from "../duotone";
import { TornadoFillIcon } from "../fill";
import { TornadoLightIcon } from "../light";
import { TornadoRegularIcon } from "../regular";
import { TornadoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TornadoIcon = memo(function Tornado(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TornadoBoldIcon,
      duotone: TornadoDuotoneIcon,
      fill: TornadoFillIcon,
      light: TornadoLightIcon,
      regular: TornadoRegularIcon,
      thin: TornadoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
