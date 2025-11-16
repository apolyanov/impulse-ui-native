import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrainBold } from "../bold";
import { TrainDuotone } from "../duotone";
import { TrainFill } from "../fill";
import { TrainLight } from "../light";
import { TrainRegular } from "../regular";
import { TrainThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Train = memo(function Train(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrainBold,
      duotone: TrainDuotone,
      fill: TrainFill,
      light: TrainLight,
      regular: TrainRegular,
      thin: TrainThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
