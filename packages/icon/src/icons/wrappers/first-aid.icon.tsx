import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FirstAidBoldIcon } from "../bold/first-aid-bold.icon";
import { FirstAidDuotoneIcon } from "../duotone/first-aid-duotone.icon";
import { FirstAidFillIcon } from "../fill/first-aid-fill.icon";
import { FirstAidLightIcon } from "../light/first-aid-light.icon";
import { FirstAidRegularIcon } from "../regular/first-aid-regular.icon";
import { FirstAidThinIcon } from "../thin/first-aid-thin.icon";

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
