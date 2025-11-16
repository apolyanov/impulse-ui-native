import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OnigiriBold } from "../bold";
import { OnigiriDuotone } from "../duotone";
import { OnigiriFill } from "../fill";
import { OnigiriLight } from "../light";
import { OnigiriRegular } from "../regular";
import { OnigiriThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Onigiri = memo(function Onigiri(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OnigiriBold,
      duotone: OnigiriDuotone,
      fill: OnigiriFill,
      light: OnigiriLight,
      regular: OnigiriRegular,
      thin: OnigiriThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
