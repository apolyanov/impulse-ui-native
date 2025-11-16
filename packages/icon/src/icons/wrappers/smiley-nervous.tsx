import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyNervousBold } from "../bold";
import { SmileyNervousDuotone } from "../duotone";
import { SmileyNervousFill } from "../fill";
import { SmileyNervousLight } from "../light";
import { SmileyNervousRegular } from "../regular";
import { SmileyNervousThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyNervous = memo(function SmileyNervous(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyNervousBold,
      duotone: SmileyNervousDuotone,
      fill: SmileyNervousFill,
      light: SmileyNervousLight,
      regular: SmileyNervousRegular,
      thin: SmileyNervousThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
