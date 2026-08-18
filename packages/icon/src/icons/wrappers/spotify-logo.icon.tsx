import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpotifyLogoBoldIcon } from "../bold/spotify-logo-bold.icon";
import { SpotifyLogoDuotoneIcon } from "../duotone/spotify-logo-duotone.icon";
import { SpotifyLogoFillIcon } from "../fill/spotify-logo-fill.icon";
import { SpotifyLogoLightIcon } from "../light/spotify-logo-light.icon";
import { SpotifyLogoRegularIcon } from "../regular/spotify-logo-regular.icon";
import { SpotifyLogoThinIcon } from "../thin/spotify-logo-thin.icon";

export const SpotifyLogoIcon = memo(function SpotifyLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpotifyLogoBoldIcon,
      duotone: SpotifyLogoDuotoneIcon,
      fill: SpotifyLogoFillIcon,
      light: SpotifyLogoLightIcon,
      regular: SpotifyLogoRegularIcon,
      thin: SpotifyLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
