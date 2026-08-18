import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToothBoldIcon } from "../bold/tooth-bold.icon";
import { ToothDuotoneIcon } from "../duotone/tooth-duotone.icon";
import { ToothFillIcon } from "../fill/tooth-fill.icon";
import { ToothLightIcon } from "../light/tooth-light.icon";
import { ToothRegularIcon } from "../regular/tooth-regular.icon";
import { ToothThinIcon } from "../thin/tooth-thin.icon";

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
