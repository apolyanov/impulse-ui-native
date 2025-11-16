import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ParkBold } from "../bold";
import { ParkDuotone } from "../duotone";
import { ParkFill } from "../fill";
import { ParkLight } from "../light";
import { ParkRegular } from "../regular";
import { ParkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Park = memo(function Park(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParkBold,
      duotone: ParkDuotone,
      fill: ParkFill,
      light: ParkLight,
      regular: ParkRegular,
      thin: ParkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
