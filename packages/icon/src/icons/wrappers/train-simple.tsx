import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrainSimpleBold } from "../bold";
import { TrainSimpleDuotone } from "../duotone";
import { TrainSimpleFill } from "../fill";
import { TrainSimpleLight } from "../light";
import { TrainSimpleRegular } from "../regular";
import { TrainSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrainSimple = memo(function TrainSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainSimpleBold,
      duotone: TrainSimpleDuotone,
      fill: TrainSimpleFill,
      light: TrainSimpleLight,
      regular: TrainSimpleRegular,
      thin: TrainSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
