import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudSunBold } from "../bold";
import { CloudSunDuotone } from "../duotone";
import { CloudSunFill } from "../fill";
import { CloudSunLight } from "../light";
import { CloudSunRegular } from "../regular";
import { CloudSunThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudSun = memo(function CloudSun(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSunBold,
      duotone: CloudSunDuotone,
      fill: CloudSunFill,
      light: CloudSunLight,
      regular: CloudSunRegular,
      thin: CloudSunThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
