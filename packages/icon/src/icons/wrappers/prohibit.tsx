import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ProhibitBold } from "../bold";
import { ProhibitDuotone } from "../duotone";
import { ProhibitFill } from "../fill";
import { ProhibitLight } from "../light";
import { ProhibitRegular } from "../regular";
import { ProhibitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Prohibit = memo(function Prohibit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProhibitBold,
      duotone: ProhibitDuotone,
      fill: ProhibitFill,
      light: ProhibitLight,
      regular: ProhibitRegular,
      thin: ProhibitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
