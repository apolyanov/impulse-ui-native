import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SteamLogoBoldIcon } from "../bold/steam-logo-bold.icon";
import { SteamLogoDuotoneIcon } from "../duotone/steam-logo-duotone.icon";
import { SteamLogoFillIcon } from "../fill/steam-logo-fill.icon";
import { SteamLogoLightIcon } from "../light/steam-logo-light.icon";
import { SteamLogoRegularIcon } from "../regular/steam-logo-regular.icon";
import { SteamLogoThinIcon } from "../thin/steam-logo-thin.icon";

export const SteamLogoIcon = memo(function SteamLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SteamLogoBoldIcon,
      duotone: SteamLogoDuotoneIcon,
      fill: SteamLogoFillIcon,
      light: SteamLogoLightIcon,
      regular: SteamLogoRegularIcon,
      thin: SteamLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
