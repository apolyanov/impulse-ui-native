import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { YoutubeLogoBoldIcon } from "../bold/youtube-logo-bold.icon";
import { YoutubeLogoDuotoneIcon } from "../duotone/youtube-logo-duotone.icon";
import { YoutubeLogoFillIcon } from "../fill/youtube-logo-fill.icon";
import { YoutubeLogoLightIcon } from "../light/youtube-logo-light.icon";
import { YoutubeLogoRegularIcon } from "../regular/youtube-logo-regular.icon";
import { YoutubeLogoThinIcon } from "../thin/youtube-logo-thin.icon";

export const YoutubeLogoIcon = memo(function YoutubeLogo(
  props: IconWrapperProps,
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
