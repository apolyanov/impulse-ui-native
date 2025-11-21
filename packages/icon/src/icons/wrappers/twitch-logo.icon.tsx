import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TwitchLogoBoldIcon } from "../bold";
import { TwitchLogoDuotoneIcon } from "../duotone";
import { TwitchLogoFillIcon } from "../fill";
import { TwitchLogoLightIcon } from "../light";
import { TwitchLogoRegularIcon } from "../regular";
import { TwitchLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TwitchLogoIcon = memo(function TwitchLogo(
  props: IconWrapperProps
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
