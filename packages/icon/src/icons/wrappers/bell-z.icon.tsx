import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellZBoldIcon } from "../bold/bell-z-bold.icon";
import { BellZDuotoneIcon } from "../duotone/bell-z-duotone.icon";
import { BellZFillIcon } from "../fill/bell-z-fill.icon";
import { BellZLightIcon } from "../light/bell-z-light.icon";
import { BellZRegularIcon } from "../regular/bell-z-regular.icon";
import { BellZThinIcon } from "../thin/bell-z-thin.icon";

export const BellZIcon = memo(function BellZ(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellZBoldIcon,
      duotone: BellZDuotoneIcon,
      fill: BellZFillIcon,
      light: BellZLightIcon,
      regular: BellZRegularIcon,
      thin: BellZThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
