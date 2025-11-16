import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SuitcaseRollingBold } from "../bold";
import { SuitcaseRollingDuotone } from "../duotone";
import { SuitcaseRollingFill } from "../fill";
import { SuitcaseRollingLight } from "../light";
import { SuitcaseRollingRegular } from "../regular";
import { SuitcaseRollingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SuitcaseRolling = memo(function SuitcaseRolling(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseRollingBold,
      duotone: SuitcaseRollingDuotone,
      fill: SuitcaseRollingFill,
      light: SuitcaseRollingLight,
      regular: SuitcaseRollingRegular,
      thin: SuitcaseRollingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
