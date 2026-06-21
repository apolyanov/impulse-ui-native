import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsRoundBoldIcon } from "../bold";
import { BracketsRoundDuotoneIcon } from "../duotone";
import { BracketsRoundFillIcon } from "../fill";
import { BracketsRoundLightIcon } from "../light";
import { BracketsRoundRegularIcon } from "../regular";
import { BracketsRoundThinIcon } from "../thin";

export const BracketsRoundIcon = memo(function BracketsRound(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsRoundBoldIcon,
      duotone: BracketsRoundDuotoneIcon,
      fill: BracketsRoundFillIcon,
      light: BracketsRoundLightIcon,
      regular: BracketsRoundRegularIcon,
      thin: BracketsRoundThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
