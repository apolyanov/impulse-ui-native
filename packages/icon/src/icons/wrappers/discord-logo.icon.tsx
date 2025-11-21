import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiscordLogoBoldIcon } from "../bold";
import { DiscordLogoDuotoneIcon } from "../duotone";
import { DiscordLogoFillIcon } from "../fill";
import { DiscordLogoLightIcon } from "../light";
import { DiscordLogoRegularIcon } from "../regular";
import { DiscordLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiscordLogoIcon = memo(function DiscordLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscordLogoBoldIcon,
      duotone: DiscordLogoDuotoneIcon,
      fill: DiscordLogoFillIcon,
      light: DiscordLogoLightIcon,
      regular: DiscordLogoRegularIcon,
      thin: DiscordLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
