import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SunBoldIcon } from "../bold/sun-bold.icon";
import { SunDuotoneIcon } from "../duotone/sun-duotone.icon";
import { SunFillIcon } from "../fill/sun-fill.icon";
import { SunLightIcon } from "../light/sun-light.icon";
import { SunRegularIcon } from "../regular/sun-regular.icon";
import { SunThinIcon } from "../thin/sun-thin.icon";

export const SunIcon = memo(function Sun(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunBoldIcon,
      duotone: SunDuotoneIcon,
      fill: SunFillIcon,
      light: SunLightIcon,
      regular: SunRegularIcon,
      thin: SunThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
