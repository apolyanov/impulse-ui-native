import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BarbellBoldIcon } from "../bold/barbell-bold.icon";
import { BarbellDuotoneIcon } from "../duotone/barbell-duotone.icon";
import { BarbellFillIcon } from "../fill/barbell-fill.icon";
import { BarbellLightIcon } from "../light/barbell-light.icon";
import { BarbellRegularIcon } from "../regular/barbell-regular.icon";
import { BarbellThinIcon } from "../thin/barbell-thin.icon";

export const BarbellIcon = memo(function Barbell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarbellBoldIcon,
      duotone: BarbellDuotoneIcon,
      fill: BarbellFillIcon,
      light: BarbellLightIcon,
      regular: BarbellRegularIcon,
      thin: BarbellThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
