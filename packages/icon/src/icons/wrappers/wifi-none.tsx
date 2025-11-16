import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiNoneBold } from "../bold";
import { WifiNoneDuotone } from "../duotone";
import { WifiNoneFill } from "../fill";
import { WifiNoneLight } from "../light";
import { WifiNoneRegular } from "../regular";
import { WifiNoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiNone = memo(function WifiNone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiNoneBold,
      duotone: WifiNoneDuotone,
      fill: WifiNoneFill,
      light: WifiNoneLight,
      regular: WifiNoneRegular,
      thin: WifiNoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
