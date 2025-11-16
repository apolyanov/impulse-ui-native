import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiscordLogoBold } from "../bold";
import { DiscordLogoDuotone } from "../duotone";
import { DiscordLogoFill } from "../fill";
import { DiscordLogoLight } from "../light";
import { DiscordLogoRegular } from "../regular";
import { DiscordLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiscordLogo = memo(function DiscordLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscordLogoBold,
      duotone: DiscordLogoDuotone,
      fill: DiscordLogoFill,
      light: DiscordLogoLight,
      regular: DiscordLogoRegular,
      thin: DiscordLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
