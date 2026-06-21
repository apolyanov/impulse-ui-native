import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ApplePodcastsLogoBoldIcon } from "../bold";
import { ApplePodcastsLogoDuotoneIcon } from "../duotone";
import { ApplePodcastsLogoFillIcon } from "../fill";
import { ApplePodcastsLogoLightIcon } from "../light";
import { ApplePodcastsLogoRegularIcon } from "../regular";
import { ApplePodcastsLogoThinIcon } from "../thin";

export const ApplePodcastsLogoIcon = memo(function ApplePodcastsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApplePodcastsLogoBoldIcon,
      duotone: ApplePodcastsLogoDuotoneIcon,
      fill: ApplePodcastsLogoFillIcon,
      light: ApplePodcastsLogoLightIcon,
      regular: ApplePodcastsLogoRegularIcon,
      thin: ApplePodcastsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
