import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyBlankBold } from "../bold";
import { SmileyBlankDuotone } from "../duotone";
import { SmileyBlankFill } from "../fill";
import { SmileyBlankLight } from "../light";
import { SmileyBlankRegular } from "../regular";
import { SmileyBlankThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyBlank = memo(function SmileyBlank(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyBlankBold,
      duotone: SmileyBlankDuotone,
      fill: SmileyBlankFill,
      light: SmileyBlankLight,
      regular: SmileyBlankRegular,
      thin: SmileyBlankThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
