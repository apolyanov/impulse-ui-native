import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsRoundBold } from "../bold";
import { BracketsRoundDuotone } from "../duotone";
import { BracketsRoundFill } from "../fill";
import { BracketsRoundLight } from "../light";
import { BracketsRoundRegular } from "../regular";
import { BracketsRoundThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsRound = memo(function BracketsRound(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsRoundBold,
      duotone: BracketsRoundDuotone,
      fill: BracketsRoundFill,
      light: BracketsRoundLight,
      regular: BracketsRoundRegular,
      thin: BracketsRoundThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
