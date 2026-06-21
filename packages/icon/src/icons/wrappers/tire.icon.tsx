import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TireBoldIcon } from "../bold";
import { TireDuotoneIcon } from "../duotone";
import { TireFillIcon } from "../fill";
import { TireLightIcon } from "../light";
import { TireRegularIcon } from "../regular";
import { TireThinIcon } from "../thin";

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
