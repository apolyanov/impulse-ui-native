import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShowerBoldIcon } from "../bold/shower-bold.icon";
import { ShowerDuotoneIcon } from "../duotone/shower-duotone.icon";
import { ShowerFillIcon } from "../fill/shower-fill.icon";
import { ShowerLightIcon } from "../light/shower-light.icon";
import { ShowerRegularIcon } from "../regular/shower-regular.icon";
import { ShowerThinIcon } from "../thin/shower-thin.icon";

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
