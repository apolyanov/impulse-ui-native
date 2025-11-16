import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StopBold } from "../bold";
import { StopDuotone } from "../duotone";
import { StopFill } from "../fill";
import { StopLight } from "../light";
import { StopRegular } from "../regular";
import { StopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stop = memo(function Stop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StopBold,
      duotone: StopDuotone,
      fill: StopFill,
      light: StopLight,
      regular: StopRegular,
      thin: StopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
