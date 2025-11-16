import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiMediumBold } from "../bold";
import { WifiMediumDuotone } from "../duotone";
import { WifiMediumFill } from "../fill";
import { WifiMediumLight } from "../light";
import { WifiMediumRegular } from "../regular";
import { WifiMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiMedium = memo(function WifiMedium(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiMediumBold,
      duotone: WifiMediumDuotone,
      fill: WifiMediumFill,
      light: WifiMediumLight,
      regular: WifiMediumRegular,
      thin: WifiMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
