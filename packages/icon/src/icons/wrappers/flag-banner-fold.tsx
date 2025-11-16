import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagBannerFoldBold } from "../bold";
import { FlagBannerFoldDuotone } from "../duotone";
import { FlagBannerFoldFill } from "../fill";
import { FlagBannerFoldLight } from "../light";
import { FlagBannerFoldRegular } from "../regular";
import { FlagBannerFoldThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlagBannerFold = memo(function FlagBannerFold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBannerFoldBold,
      duotone: FlagBannerFoldDuotone,
      fill: FlagBannerFoldFill,
      light: FlagBannerFoldLight,
      regular: FlagBannerFoldRegular,
      thin: FlagBannerFoldThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
