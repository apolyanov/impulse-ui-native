import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyWinkBold } from "../bold";
import { SmileyWinkDuotone } from "../duotone";
import { SmileyWinkFill } from "../fill";
import { SmileyWinkLight } from "../light";
import { SmileyWinkRegular } from "../regular";
import { SmileyWinkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyWink = memo(function SmileyWink(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyWinkBold,
      duotone: SmileyWinkDuotone,
      fill: SmileyWinkFill,
      light: SmileyWinkLight,
      regular: SmileyWinkRegular,
      thin: SmileyWinkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
