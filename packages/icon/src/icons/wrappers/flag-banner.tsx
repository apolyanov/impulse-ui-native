import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagBannerBold } from "../bold";
import { FlagBannerDuotone } from "../duotone";
import { FlagBannerFill } from "../fill";
import { FlagBannerLight } from "../light";
import { FlagBannerRegular } from "../regular";
import { FlagBannerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlagBanner = memo(function FlagBanner(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBannerBold,
      duotone: FlagBannerDuotone,
      fill: FlagBannerFill,
      light: FlagBannerLight,
      regular: FlagBannerRegular,
      thin: FlagBannerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
