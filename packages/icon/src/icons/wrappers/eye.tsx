import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyeBold } from "../bold";
import { EyeDuotone } from "../duotone";
import { EyeFill } from "../fill";
import { EyeLight } from "../light";
import { EyeRegular } from "../regular";
import { EyeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eye = memo(function Eye(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeBold,
      duotone: EyeDuotone,
      fill: EyeFill,
      light: EyeLight,
      regular: EyeRegular,
      thin: EyeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
