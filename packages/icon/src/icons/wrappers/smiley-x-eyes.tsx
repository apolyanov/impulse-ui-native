import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyXEyesBold } from "../bold";
import { SmileyXEyesDuotone } from "../duotone";
import { SmileyXEyesFill } from "../fill";
import { SmileyXEyesLight } from "../light";
import { SmileyXEyesRegular } from "../regular";
import { SmileyXEyesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyXEyes = memo(function SmileyXEyes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyXEyesBold,
      duotone: SmileyXEyesDuotone,
      fill: SmileyXEyesFill,
      light: SmileyXEyesLight,
      regular: SmileyXEyesRegular,
      thin: SmileyXEyesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
