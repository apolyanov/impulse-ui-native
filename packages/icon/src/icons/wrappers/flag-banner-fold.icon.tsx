import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagBannerFoldBoldIcon } from "../bold/flag-banner-fold-bold.icon";
import { FlagBannerFoldDuotoneIcon } from "../duotone/flag-banner-fold-duotone.icon";
import { FlagBannerFoldFillIcon } from "../fill/flag-banner-fold-fill.icon";
import { FlagBannerFoldLightIcon } from "../light/flag-banner-fold-light.icon";
import { FlagBannerFoldRegularIcon } from "../regular/flag-banner-fold-regular.icon";
import { FlagBannerFoldThinIcon } from "../thin/flag-banner-fold-thin.icon";

export const FlagBannerFoldIcon = memo(function FlagBannerFold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBannerFoldBoldIcon,
      duotone: FlagBannerFoldDuotoneIcon,
      fill: FlagBannerFoldFillIcon,
      light: FlagBannerFoldLightIcon,
      regular: FlagBannerFoldRegularIcon,
      thin: FlagBannerFoldThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
