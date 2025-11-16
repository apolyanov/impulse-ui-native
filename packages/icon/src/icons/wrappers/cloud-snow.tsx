import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudSnowBold } from "../bold";
import { CloudSnowDuotone } from "../duotone";
import { CloudSnowFill } from "../fill";
import { CloudSnowLight } from "../light";
import { CloudSnowRegular } from "../regular";
import { CloudSnowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudSnow = memo(function CloudSnow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSnowBold,
      duotone: CloudSnowDuotone,
      fill: CloudSnowFill,
      light: CloudSnowLight,
      regular: CloudSnowRegular,
      thin: CloudSnowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
