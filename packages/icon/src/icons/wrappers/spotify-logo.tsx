import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpotifyLogoBold } from "../bold";
import { SpotifyLogoDuotone } from "../duotone";
import { SpotifyLogoFill } from "../fill";
import { SpotifyLogoLight } from "../light";
import { SpotifyLogoRegular } from "../regular";
import { SpotifyLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpotifyLogo = memo(function SpotifyLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpotifyLogoBold,
      duotone: SpotifyLogoDuotone,
      fill: SpotifyLogoFill,
      light: SpotifyLogoLight,
      regular: SpotifyLogoRegular,
      thin: SpotifyLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
