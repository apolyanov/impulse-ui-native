import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandWavingBold } from "../bold";
import { HandWavingDuotone } from "../duotone";
import { HandWavingFill } from "../fill";
import { HandWavingLight } from "../light";
import { HandWavingRegular } from "../regular";
import { HandWavingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandWaving = memo(function HandWaving(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandWavingBold,
      duotone: HandWavingDuotone,
      fill: HandWavingFill,
      light: HandWavingLight,
      regular: HandWavingRegular,
      thin: HandWavingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
