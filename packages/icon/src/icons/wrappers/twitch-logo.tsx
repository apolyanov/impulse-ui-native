import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TwitchLogoBold } from "../bold";
import { TwitchLogoDuotone } from "../duotone";
import { TwitchLogoFill } from "../fill";
import { TwitchLogoLight } from "../light";
import { TwitchLogoRegular } from "../regular";
import { TwitchLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TwitchLogo = memo(function TwitchLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TwitchLogoBold,
      duotone: TwitchLogoDuotone,
      fill: TwitchLogoFill,
      light: TwitchLogoLight,
      regular: TwitchLogoRegular,
      thin: TwitchLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
