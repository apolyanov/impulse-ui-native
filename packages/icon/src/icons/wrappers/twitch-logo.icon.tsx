import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TwitchLogoBoldIcon } from "../bold/twitch-logo-bold.icon";
import { TwitchLogoDuotoneIcon } from "../duotone/twitch-logo-duotone.icon";
import { TwitchLogoFillIcon } from "../fill/twitch-logo-fill.icon";
import { TwitchLogoLightIcon } from "../light/twitch-logo-light.icon";
import { TwitchLogoRegularIcon } from "../regular/twitch-logo-regular.icon";
import { TwitchLogoThinIcon } from "../thin/twitch-logo-thin.icon";

export const TwitchLogoIcon = memo(function TwitchLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TwitchLogoBoldIcon,
      duotone: TwitchLogoDuotoneIcon,
      fill: TwitchLogoFillIcon,
      light: TwitchLogoLightIcon,
      regular: TwitchLogoRegularIcon,
      thin: TwitchLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
