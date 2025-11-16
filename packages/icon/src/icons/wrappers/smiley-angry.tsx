import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyAngryBold } from "../bold";
import { SmileyAngryDuotone } from "../duotone";
import { SmileyAngryFill } from "../fill";
import { SmileyAngryLight } from "../light";
import { SmileyAngryRegular } from "../regular";
import { SmileyAngryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyAngry = memo(function SmileyAngry(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyAngryBold,
      duotone: SmileyAngryDuotone,
      fill: SmileyAngryFill,
      light: SmileyAngryLight,
      regular: SmileyAngryRegular,
      thin: SmileyAngryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
