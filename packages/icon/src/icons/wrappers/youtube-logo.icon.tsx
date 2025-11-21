import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { YoutubeLogoBoldIcon } from "../bold";
import { YoutubeLogoDuotoneIcon } from "../duotone";
import { YoutubeLogoFillIcon } from "../fill";
import { YoutubeLogoLightIcon } from "../light";
import { YoutubeLogoRegularIcon } from "../regular";
import { YoutubeLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const YoutubeLogoIcon = memo(function YoutubeLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: YoutubeLogoBoldIcon,
      duotone: YoutubeLogoDuotoneIcon,
      fill: YoutubeLogoFillIcon,
      light: YoutubeLogoLightIcon,
      regular: YoutubeLogoRegularIcon,
      thin: YoutubeLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
