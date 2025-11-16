import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToothBold } from "../bold";
import { ToothDuotone } from "../duotone";
import { ToothFill } from "../fill";
import { ToothLight } from "../light";
import { ToothRegular } from "../regular";
import { ToothThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tooth = memo(function Tooth(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToothBold,
      duotone: ToothDuotone,
      fill: ToothFill,
      light: ToothLight,
      regular: ToothRegular,
      thin: ToothThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
