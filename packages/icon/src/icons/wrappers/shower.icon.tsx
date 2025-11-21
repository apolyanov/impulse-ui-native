import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShowerBoldIcon } from "../bold";
import { ShowerDuotoneIcon } from "../duotone";
import { ShowerFillIcon } from "../fill";
import { ShowerLightIcon } from "../light";
import { ShowerRegularIcon } from "../regular";
import { ShowerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShowerIcon = memo(function Shower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShowerBoldIcon,
      duotone: ShowerDuotoneIcon,
      fill: ShowerFillIcon,
      light: ShowerLightIcon,
      regular: ShowerRegularIcon,
      thin: ShowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
