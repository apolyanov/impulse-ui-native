import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToothBoldIcon } from "../bold";
import { ToothDuotoneIcon } from "../duotone";
import { ToothFillIcon } from "../fill";
import { ToothLightIcon } from "../light";
import { ToothRegularIcon } from "../regular";
import { ToothThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToothIcon = memo(function Tooth(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToothBoldIcon,
      duotone: ToothDuotoneIcon,
      fill: ToothFillIcon,
      light: ToothLightIcon,
      regular: ToothRegularIcon,
      thin: ToothThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
