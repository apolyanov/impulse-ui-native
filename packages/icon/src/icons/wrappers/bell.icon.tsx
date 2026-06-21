import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellBoldIcon } from "../bold";
import { BellDuotoneIcon } from "../duotone";
import { BellFillIcon } from "../fill";
import { BellLightIcon } from "../light";
import { BellRegularIcon } from "../regular";
import { BellThinIcon } from "../thin";

export const BellIcon = memo(function Bell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellBoldIcon,
      duotone: BellDuotoneIcon,
      fill: BellFillIcon,
      light: BellLightIcon,
      regular: BellRegularIcon,
      thin: BellThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
