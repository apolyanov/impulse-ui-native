import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ApplePodcastsLogoBold } from "../bold";
import { ApplePodcastsLogoDuotone } from "../duotone";
import { ApplePodcastsLogoFill } from "../fill";
import { ApplePodcastsLogoLight } from "../light";
import { ApplePodcastsLogoRegular } from "../regular";
import { ApplePodcastsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ApplePodcastsLogo = memo(function ApplePodcastsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApplePodcastsLogoBold,
      duotone: ApplePodcastsLogoDuotone,
      fill: ApplePodcastsLogoFill,
      light: ApplePodcastsLogoLight,
      regular: ApplePodcastsLogoRegular,
      thin: ApplePodcastsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
