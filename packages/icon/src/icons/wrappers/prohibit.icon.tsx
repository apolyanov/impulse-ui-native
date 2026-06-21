import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProhibitBoldIcon } from "../bold";
import { ProhibitDuotoneIcon } from "../duotone";
import { ProhibitFillIcon } from "../fill";
import { ProhibitLightIcon } from "../light";
import { ProhibitRegularIcon } from "../regular";
import { ProhibitThinIcon } from "../thin";

export const ProhibitIcon = memo(function Prohibit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ProhibitBoldIcon,
      duotone: ProhibitDuotoneIcon,
      fill: ProhibitFillIcon,
      light: ProhibitLightIcon,
      regular: ProhibitRegularIcon,
      thin: ProhibitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
