import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningOctagonBold } from "../bold";
import { WarningOctagonDuotone } from "../duotone";
import { WarningOctagonFill } from "../fill";
import { WarningOctagonLight } from "../light";
import { WarningOctagonRegular } from "../regular";
import { WarningOctagonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WarningOctagon = memo(function WarningOctagon(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningOctagonBold,
      duotone: WarningOctagonDuotone,
      fill: WarningOctagonFill,
      light: WarningOctagonLight,
      regular: WarningOctagonRegular,
      thin: WarningOctagonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
