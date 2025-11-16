import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TramBold } from "../bold";
import { TramDuotone } from "../duotone";
import { TramFill } from "../fill";
import { TramLight } from "../light";
import { TramRegular } from "../regular";
import { TramThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tram = memo(function Tram(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TramBold,
      duotone: TramDuotone,
      fill: TramFill,
      light: TramLight,
      regular: TramRegular,
      thin: TramThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
