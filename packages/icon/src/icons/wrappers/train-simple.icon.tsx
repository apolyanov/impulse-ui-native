import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrainSimpleBoldIcon } from "../bold/train-simple-bold.icon";
import { TrainSimpleDuotoneIcon } from "../duotone/train-simple-duotone.icon";
import { TrainSimpleFillIcon } from "../fill/train-simple-fill.icon";
import { TrainSimpleLightIcon } from "../light/train-simple-light.icon";
import { TrainSimpleRegularIcon } from "../regular/train-simple-regular.icon";
import { TrainSimpleThinIcon } from "../thin/train-simple-thin.icon";

export const TrainSimpleIcon = memo(function TrainSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainSimpleBoldIcon,
      duotone: TrainSimpleDuotoneIcon,
      fill: TrainSimpleFillIcon,
      light: TrainSimpleLightIcon,
      regular: TrainSimpleRegularIcon,
      thin: TrainSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
