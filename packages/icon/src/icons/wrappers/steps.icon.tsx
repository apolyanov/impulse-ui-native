import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StepsBoldIcon } from "../bold/steps-bold.icon";
import { StepsDuotoneIcon } from "../duotone/steps-duotone.icon";
import { StepsFillIcon } from "../fill/steps-fill.icon";
import { StepsLightIcon } from "../light/steps-light.icon";
import { StepsRegularIcon } from "../regular/steps-regular.icon";
import { StepsThinIcon } from "../thin/steps-thin.icon";

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
