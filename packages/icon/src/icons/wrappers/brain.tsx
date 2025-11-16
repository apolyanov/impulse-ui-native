import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrainBold } from "../bold";
import { BrainDuotone } from "../duotone";
import { BrainFill } from "../fill";
import { BrainLight } from "../light";
import { BrainRegular } from "../regular";
import { BrainThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Brain = memo(function Brain(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrainBold,
      duotone: BrainDuotone,
      fill: BrainFill,
      light: BrainLight,
      regular: BrainRegular,
      thin: BrainThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
