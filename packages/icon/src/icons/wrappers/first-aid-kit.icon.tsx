import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FirstAidKitBoldIcon } from "../bold/first-aid-kit-bold.icon";
import { FirstAidKitDuotoneIcon } from "../duotone/first-aid-kit-duotone.icon";
import { FirstAidKitFillIcon } from "../fill/first-aid-kit-fill.icon";
import { FirstAidKitLightIcon } from "../light/first-aid-kit-light.icon";
import { FirstAidKitRegularIcon } from "../regular/first-aid-kit-regular.icon";
import { FirstAidKitThinIcon } from "../thin/first-aid-kit-thin.icon";

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
