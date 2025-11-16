import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StepsBold } from "../bold";
import { StepsDuotone } from "../duotone";
import { StepsFill } from "../fill";
import { StepsLight } from "../light";
import { StepsRegular } from "../regular";
import { StepsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Steps = memo(function Steps(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StepsBold,
      duotone: StepsDuotone,
      fill: StepsFill,
      light: StepsLight,
      regular: StepsRegular,
      thin: StepsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
