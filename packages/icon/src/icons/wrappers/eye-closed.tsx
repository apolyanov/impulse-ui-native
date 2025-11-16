import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyeClosedBold } from "../bold";
import { EyeClosedDuotone } from "../duotone";
import { EyeClosedFill } from "../fill";
import { EyeClosedLight } from "../light";
import { EyeClosedRegular } from "../regular";
import { EyeClosedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EyeClosed = memo(function EyeClosed(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeClosedBold,
      duotone: EyeClosedDuotone,
      fill: EyeClosedFill,
      light: EyeClosedLight,
      regular: EyeClosedRegular,
      thin: EyeClosedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
