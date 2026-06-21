import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FirstAidBoldIcon } from "../bold";
import { FirstAidDuotoneIcon } from "../duotone";
import { FirstAidFillIcon } from "../fill";
import { FirstAidLightIcon } from "../light";
import { FirstAidRegularIcon } from "../regular";
import { FirstAidThinIcon } from "../thin";

export const FirstAidIcon = memo(function FirstAid(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FirstAidBoldIcon,
      duotone: FirstAidDuotoneIcon,
      fill: FirstAidFillIcon,
      light: FirstAidLightIcon,
      regular: FirstAidRegularIcon,
      thin: FirstAidThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
