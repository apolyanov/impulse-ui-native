import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudSunBoldIcon } from "../bold";
import { CloudSunDuotoneIcon } from "../duotone";
import { CloudSunFillIcon } from "../fill";
import { CloudSunLightIcon } from "../light";
import { CloudSunRegularIcon } from "../regular";
import { CloudSunThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudSunIcon = memo(function CloudSun(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSunBoldIcon,
      duotone: CloudSunDuotoneIcon,
      fill: CloudSunFillIcon,
      light: CloudSunLightIcon,
      regular: CloudSunRegularIcon,
      thin: CloudSunThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
