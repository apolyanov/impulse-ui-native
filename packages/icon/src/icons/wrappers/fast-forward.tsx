import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FastForwardBold } from "../bold";
import { FastForwardDuotone } from "../duotone";
import { FastForwardFill } from "../fill";
import { FastForwardLight } from "../light";
import { FastForwardRegular } from "../regular";
import { FastForwardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FastForward = memo(function FastForward(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FastForwardBold,
      duotone: FastForwardDuotone,
      fill: FastForwardFill,
      light: FastForwardLight,
      regular: FastForwardRegular,
      thin: FastForwardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
