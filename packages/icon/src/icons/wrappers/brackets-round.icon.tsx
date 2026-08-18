import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsRoundBoldIcon } from "../bold/brackets-round-bold.icon";
import { BracketsRoundDuotoneIcon } from "../duotone/brackets-round-duotone.icon";
import { BracketsRoundFillIcon } from "../fill/brackets-round-fill.icon";
import { BracketsRoundLightIcon } from "../light/brackets-round-light.icon";
import { BracketsRoundRegularIcon } from "../regular/brackets-round-regular.icon";
import { BracketsRoundThinIcon } from "../thin/brackets-round-thin.icon";

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
