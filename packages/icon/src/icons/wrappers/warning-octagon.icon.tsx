import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarningOctagonBoldIcon } from "../bold/warning-octagon-bold.icon";
import { WarningOctagonDuotoneIcon } from "../duotone/warning-octagon-duotone.icon";
import { WarningOctagonFillIcon } from "../fill/warning-octagon-fill.icon";
import { WarningOctagonLightIcon } from "../light/warning-octagon-light.icon";
import { WarningOctagonRegularIcon } from "../regular/warning-octagon-regular.icon";
import { WarningOctagonThinIcon } from "../thin/warning-octagon-thin.icon";

export const WarningOctagonIcon = memo(function WarningOctagon(
  props: IconWrapperProps,
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
