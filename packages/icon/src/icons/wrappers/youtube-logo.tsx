import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { YoutubeLogoBold } from "../bold";
import { YoutubeLogoDuotone } from "../duotone";
import { YoutubeLogoFill } from "../fill";
import { YoutubeLogoLight } from "../light";
import { YoutubeLogoRegular } from "../regular";
import { YoutubeLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const YoutubeLogo = memo(function YoutubeLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YoutubeLogoBold,
      duotone: YoutubeLogoDuotone,
      fill: YoutubeLogoFill,
      light: YoutubeLogoLight,
      regular: YoutubeLogoRegular,
      thin: YoutubeLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
