import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrainBoldIcon } from "../bold";
import { TrainDuotoneIcon } from "../duotone";
import { TrainFillIcon } from "../fill";
import { TrainLightIcon } from "../light";
import { TrainRegularIcon } from "../regular";
import { TrainThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrainIcon = memo(function Train(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainBoldIcon,
      duotone: TrainDuotoneIcon,
      fill: TrainFillIcon,
      light: TrainLightIcon,
      regular: TrainRegularIcon,
      thin: TrainThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
