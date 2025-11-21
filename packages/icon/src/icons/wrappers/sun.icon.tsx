import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunBoldIcon } from "../bold";
import { SunDuotoneIcon } from "../duotone";
import { SunFillIcon } from "../fill";
import { SunLightIcon } from "../light";
import { SunRegularIcon } from "../regular";
import { SunThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
