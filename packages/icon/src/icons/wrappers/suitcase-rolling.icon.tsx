import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SuitcaseRollingBoldIcon } from "../bold";
import { SuitcaseRollingDuotoneIcon } from "../duotone";
import { SuitcaseRollingFillIcon } from "../fill";
import { SuitcaseRollingLightIcon } from "../light";
import { SuitcaseRollingRegularIcon } from "../regular";
import { SuitcaseRollingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SuitcaseRollingIcon = memo(function SuitcaseRolling(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SuitcaseRollingBoldIcon,
      duotone: SuitcaseRollingDuotoneIcon,
      fill: SuitcaseRollingFillIcon,
      light: SuitcaseRollingLightIcon,
      regular: SuitcaseRollingRegularIcon,
      thin: SuitcaseRollingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
