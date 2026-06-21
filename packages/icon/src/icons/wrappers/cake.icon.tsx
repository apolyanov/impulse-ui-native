import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CakeBoldIcon } from "../bold";
import { CakeDuotoneIcon } from "../duotone";
import { CakeFillIcon } from "../fill";
import { CakeLightIcon } from "../light";
import { CakeRegularIcon } from "../regular";
import { CakeThinIcon } from "../thin";

export const CakeIcon = memo(function Cake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CakeBoldIcon,
      duotone: CakeDuotoneIcon,
      fill: CakeFillIcon,
      light: CakeLightIcon,
      regular: CakeRegularIcon,
      thin: CakeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
