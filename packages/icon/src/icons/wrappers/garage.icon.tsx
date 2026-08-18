import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GarageBoldIcon } from "../bold/garage-bold.icon";
import { GarageDuotoneIcon } from "../duotone/garage-duotone.icon";
import { GarageFillIcon } from "../fill/garage-fill.icon";
import { GarageLightIcon } from "../light/garage-light.icon";
import { GarageRegularIcon } from "../regular/garage-regular.icon";
import { GarageThinIcon } from "../thin/garage-thin.icon";

export const GarageIcon = memo(function Garage(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GarageBoldIcon,
      duotone: GarageDuotoneIcon,
      fill: GarageFillIcon,
      light: GarageLightIcon,
      regular: GarageRegularIcon,
      thin: GarageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
