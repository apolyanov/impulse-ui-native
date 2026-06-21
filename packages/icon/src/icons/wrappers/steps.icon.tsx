import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StepsBoldIcon } from "../bold";
import { StepsDuotoneIcon } from "../duotone";
import { StepsFillIcon } from "../fill";
import { StepsLightIcon } from "../light";
import { StepsRegularIcon } from "../regular";
import { StepsThinIcon } from "../thin";

export const StepsIcon = memo(function Steps(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StepsBoldIcon,
      duotone: StepsDuotoneIcon,
      fill: StepsFillIcon,
      light: StepsLightIcon,
      regular: StepsRegularIcon,
      thin: StepsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
