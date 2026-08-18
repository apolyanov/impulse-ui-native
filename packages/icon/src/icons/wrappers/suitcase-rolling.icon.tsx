import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SuitcaseRollingBoldIcon } from "../bold/suitcase-rolling-bold.icon";
import { SuitcaseRollingDuotoneIcon } from "../duotone/suitcase-rolling-duotone.icon";
import { SuitcaseRollingFillIcon } from "../fill/suitcase-rolling-fill.icon";
import { SuitcaseRollingLightIcon } from "../light/suitcase-rolling-light.icon";
import { SuitcaseRollingRegularIcon } from "../regular/suitcase-rolling-regular.icon";
import { SuitcaseRollingThinIcon } from "../thin/suitcase-rolling-thin.icon";

export const SuitcaseRollingIcon = memo(function SuitcaseRolling(
  props: IconWrapperProps,
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
