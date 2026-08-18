import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudSunBoldIcon } from "../bold/cloud-sun-bold.icon";
import { CloudSunDuotoneIcon } from "../duotone/cloud-sun-duotone.icon";
import { CloudSunFillIcon } from "../fill/cloud-sun-fill.icon";
import { CloudSunLightIcon } from "../light/cloud-sun-light.icon";
import { CloudSunRegularIcon } from "../regular/cloud-sun-regular.icon";
import { CloudSunThinIcon } from "../thin/cloud-sun-thin.icon";

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
