import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyMeltingBold } from "../bold";
import { SmileyMeltingDuotone } from "../duotone";
import { SmileyMeltingFill } from "../fill";
import { SmileyMeltingLight } from "../light";
import { SmileyMeltingRegular } from "../regular";
import { SmileyMeltingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyMelting = memo(function SmileyMelting(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyMeltingBold,
      duotone: SmileyMeltingDuotone,
      fill: SmileyMeltingFill,
      light: SmileyMeltingLight,
      regular: SmileyMeltingRegular,
      thin: SmileyMeltingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
