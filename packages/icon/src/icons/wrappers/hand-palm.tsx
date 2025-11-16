import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandPalmBold } from "../bold";
import { HandPalmDuotone } from "../duotone";
import { HandPalmFill } from "../fill";
import { HandPalmLight } from "../light";
import { HandPalmRegular } from "../regular";
import { HandPalmThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandPalm = memo(function HandPalm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPalmBold,
      duotone: HandPalmDuotone,
      fill: HandPalmFill,
      light: HandPalmLight,
      regular: HandPalmRegular,
      thin: HandPalmThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
