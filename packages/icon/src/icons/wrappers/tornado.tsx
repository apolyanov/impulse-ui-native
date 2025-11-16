import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TornadoBold } from "../bold";
import { TornadoDuotone } from "../duotone";
import { TornadoFill } from "../fill";
import { TornadoLight } from "../light";
import { TornadoRegular } from "../regular";
import { TornadoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tornado = memo(function Tornado(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TornadoBold,
      duotone: TornadoDuotone,
      fill: TornadoFill,
      light: TornadoLight,
      regular: TornadoRegular,
      thin: TornadoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
