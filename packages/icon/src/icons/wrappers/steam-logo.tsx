import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SteamLogoBold } from "../bold";
import { SteamLogoDuotone } from "../duotone";
import { SteamLogoFill } from "../fill";
import { SteamLogoLight } from "../light";
import { SteamLogoRegular } from "../regular";
import { SteamLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SteamLogo = memo(function SteamLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SteamLogoBold,
      duotone: SteamLogoDuotone,
      fill: SteamLogoFill,
      light: SteamLogoLight,
      regular: SteamLogoRegular,
      thin: SteamLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
