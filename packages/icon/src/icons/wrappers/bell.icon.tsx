import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellBoldIcon } from "../bold/bell-bold.icon";
import { BellDuotoneIcon } from "../duotone/bell-duotone.icon";
import { BellFillIcon } from "../fill/bell-fill.icon";
import { BellLightIcon } from "../light/bell-light.icon";
import { BellRegularIcon } from "../regular/bell-regular.icon";
import { BellThinIcon } from "../thin/bell-thin.icon";

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
