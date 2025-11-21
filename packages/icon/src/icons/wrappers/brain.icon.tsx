import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrainBoldIcon } from "../bold";
import { BrainDuotoneIcon } from "../duotone";
import { BrainFillIcon } from "../fill";
import { BrainLightIcon } from "../light";
import { BrainRegularIcon } from "../regular";
import { BrainThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BrainIcon = memo(function Brain(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrainBoldIcon,
      duotone: BrainDuotoneIcon,
      fill: BrainFillIcon,
      light: BrainLightIcon,
      regular: BrainRegularIcon,
      thin: BrainThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
