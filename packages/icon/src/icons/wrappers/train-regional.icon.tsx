import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrainRegionalBoldIcon } from "../bold/train-regional-bold.icon";
import { TrainRegionalDuotoneIcon } from "../duotone/train-regional-duotone.icon";
import { TrainRegionalFillIcon } from "../fill/train-regional-fill.icon";
import { TrainRegionalLightIcon } from "../light/train-regional-light.icon";
import { TrainRegionalRegularIcon } from "../regular/train-regional-regular.icon";
import { TrainRegionalThinIcon } from "../thin/train-regional-thin.icon";

export const TrainRegionalIcon = memo(function TrainRegional(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainRegionalBoldIcon,
      duotone: TrainRegionalDuotoneIcon,
      fill: TrainRegionalFillIcon,
      light: TrainRegionalLightIcon,
      regular: TrainRegionalRegularIcon,
      thin: TrainRegionalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
