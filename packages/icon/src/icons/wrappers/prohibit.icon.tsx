import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ProhibitBoldIcon } from "../bold/prohibit-bold.icon";
import { ProhibitDuotoneIcon } from "../duotone/prohibit-duotone.icon";
import { ProhibitFillIcon } from "../fill/prohibit-fill.icon";
import { ProhibitLightIcon } from "../light/prohibit-light.icon";
import { ProhibitRegularIcon } from "../regular/prohibit-regular.icon";
import { ProhibitThinIcon } from "../thin/prohibit-thin.icon";

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
