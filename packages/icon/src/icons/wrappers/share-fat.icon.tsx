import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShareFatBoldIcon } from "../bold";
import { ShareFatDuotoneIcon } from "../duotone";
import { ShareFatFillIcon } from "../fill";
import { ShareFatLightIcon } from "../light";
import { ShareFatRegularIcon } from "../regular";
import { ShareFatThinIcon } from "../thin";

export const ShareFatIcon = memo(function ShareFat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareFatBoldIcon,
      duotone: ShareFatDuotoneIcon,
      fill: ShareFatFillIcon,
      light: ShareFatLightIcon,
      regular: ShareFatRegularIcon,
      thin: ShareFatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
