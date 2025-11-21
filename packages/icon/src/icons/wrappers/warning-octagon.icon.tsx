import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningOctagonBoldIcon } from "../bold";
import { WarningOctagonDuotoneIcon } from "../duotone";
import { WarningOctagonFillIcon } from "../fill";
import { WarningOctagonLightIcon } from "../light";
import { WarningOctagonRegularIcon } from "../regular";
import { WarningOctagonThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WarningOctagonIcon = memo(function WarningOctagon(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningOctagonBoldIcon,
      duotone: WarningOctagonDuotoneIcon,
      fill: WarningOctagonFillIcon,
      light: WarningOctagonLightIcon,
      regular: WarningOctagonRegularIcon,
      thin: WarningOctagonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
