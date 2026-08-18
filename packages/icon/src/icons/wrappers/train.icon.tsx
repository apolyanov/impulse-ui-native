import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrainBoldIcon } from "../bold/train-bold.icon";
import { TrainDuotoneIcon } from "../duotone/train-duotone.icon";
import { TrainFillIcon } from "../fill/train-fill.icon";
import { TrainLightIcon } from "../light/train-light.icon";
import { TrainRegularIcon } from "../regular/train-regular.icon";
import { TrainThinIcon } from "../thin/train-thin.icon";

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
