import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiscordLogoBoldIcon } from "../bold/discord-logo-bold.icon";
import { DiscordLogoDuotoneIcon } from "../duotone/discord-logo-duotone.icon";
import { DiscordLogoFillIcon } from "../fill/discord-logo-fill.icon";
import { DiscordLogoLightIcon } from "../light/discord-logo-light.icon";
import { DiscordLogoRegularIcon } from "../regular/discord-logo-regular.icon";
import { DiscordLogoThinIcon } from "../thin/discord-logo-thin.icon";

export const DiscordLogoIcon = memo(function DiscordLogo(
  props: IconWrapperProps,
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
