import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandEyeBold } from "../bold";
import { HandEyeDuotone } from "../duotone";
import { HandEyeFill } from "../fill";
import { HandEyeLight } from "../light";
import { HandEyeRegular } from "../regular";
import { HandEyeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandEye = memo(function HandEye(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandEyeBold,
      duotone: HandEyeDuotone,
      fill: HandEyeFill,
      light: HandEyeLight,
      regular: HandEyeRegular,
      thin: HandEyeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
