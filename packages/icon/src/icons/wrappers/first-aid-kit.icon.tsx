import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FirstAidKitBoldIcon } from "../bold";
import { FirstAidKitDuotoneIcon } from "../duotone";
import { FirstAidKitFillIcon } from "../fill";
import { FirstAidKitLightIcon } from "../light";
import { FirstAidKitRegularIcon } from "../regular";
import { FirstAidKitThinIcon } from "../thin";

export const FirstAidKitIcon = memo(function FirstAidKit(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FirstAidKitBoldIcon,
      duotone: FirstAidKitDuotoneIcon,
      fill: FirstAidKitFillIcon,
      light: FirstAidKitLightIcon,
      regular: FirstAidKitRegularIcon,
      thin: FirstAidKitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
