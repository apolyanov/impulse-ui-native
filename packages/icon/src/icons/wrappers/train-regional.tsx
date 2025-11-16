import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrainRegionalBold } from "../bold";
import { TrainRegionalDuotone } from "../duotone";
import { TrainRegionalFill } from "../fill";
import { TrainRegionalLight } from "../light";
import { TrainRegionalRegular } from "../regular";
import { TrainRegionalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrainRegional = memo(function TrainRegional(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainRegionalBold,
      duotone: TrainRegionalDuotone,
      fill: TrainRegionalFill,
      light: TrainRegionalLight,
      regular: TrainRegionalRegular,
      thin: TrainRegionalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
