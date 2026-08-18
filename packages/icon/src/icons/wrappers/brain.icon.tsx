import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BrainBoldIcon } from "../bold/brain-bold.icon";
import { BrainDuotoneIcon } from "../duotone/brain-duotone.icon";
import { BrainFillIcon } from "../fill/brain-fill.icon";
import { BrainLightIcon } from "../light/brain-light.icon";
import { BrainRegularIcon } from "../regular/brain-regular.icon";
import { BrainThinIcon } from "../thin/brain-thin.icon";

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
