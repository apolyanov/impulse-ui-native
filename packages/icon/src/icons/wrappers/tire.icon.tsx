import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TireBoldIcon } from "../bold/tire-bold.icon";
import { TireDuotoneIcon } from "../duotone/tire-duotone.icon";
import { TireFillIcon } from "../fill/tire-fill.icon";
import { TireLightIcon } from "../light/tire-light.icon";
import { TireRegularIcon } from "../regular/tire-regular.icon";
import { TireThinIcon } from "../thin/tire-thin.icon";

export const TireIcon = memo(function Tire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TireBoldIcon,
      duotone: TireDuotoneIcon,
      fill: TireFillIcon,
      light: TireLightIcon,
      regular: TireRegularIcon,
      thin: TireThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
