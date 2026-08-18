import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LegoBoldIcon } from "../bold/lego-bold.icon";
import { LegoDuotoneIcon } from "../duotone/lego-duotone.icon";
import { LegoFillIcon } from "../fill/lego-fill.icon";
import { LegoLightIcon } from "../light/lego-light.icon";
import { LegoRegularIcon } from "../regular/lego-regular.icon";
import { LegoThinIcon } from "../thin/lego-thin.icon";

export const LegoIcon = memo(function Lego(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LegoBoldIcon,
      duotone: LegoDuotoneIcon,
      fill: LegoFillIcon,
      light: LegoLightIcon,
      regular: LegoRegularIcon,
      thin: LegoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
