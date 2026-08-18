import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CakeBoldIcon } from "../bold/cake-bold.icon";
import { CakeDuotoneIcon } from "../duotone/cake-duotone.icon";
import { CakeFillIcon } from "../fill/cake-fill.icon";
import { CakeLightIcon } from "../light/cake-light.icon";
import { CakeRegularIcon } from "../regular/cake-regular.icon";
import { CakeThinIcon } from "../thin/cake-thin.icon";

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
