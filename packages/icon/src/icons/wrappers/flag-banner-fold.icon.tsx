import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagBannerFoldBoldIcon } from "../bold";
import { FlagBannerFoldDuotoneIcon } from "../duotone";
import { FlagBannerFoldFillIcon } from "../fill";
import { FlagBannerFoldLightIcon } from "../light";
import { FlagBannerFoldRegularIcon } from "../regular";
import { FlagBannerFoldThinIcon } from "../thin";

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
