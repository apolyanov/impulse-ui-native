import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagBannerBoldIcon } from "../bold/flag-banner-bold.icon";
import { FlagBannerDuotoneIcon } from "../duotone/flag-banner-duotone.icon";
import { FlagBannerFillIcon } from "../fill/flag-banner-fill.icon";
import { FlagBannerLightIcon } from "../light/flag-banner-light.icon";
import { FlagBannerRegularIcon } from "../regular/flag-banner-regular.icon";
import { FlagBannerThinIcon } from "../thin/flag-banner-thin.icon";

export const FlagBannerIcon = memo(function FlagBanner(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBannerBoldIcon,
      duotone: FlagBannerDuotoneIcon,
      fill: FlagBannerFillIcon,
      light: FlagBannerLightIcon,
      regular: FlagBannerRegularIcon,
      thin: FlagBannerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
