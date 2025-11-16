import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkipForwardBold } from "../bold";
import { SkipForwardDuotone } from "../duotone";
import { SkipForwardFill } from "../fill";
import { SkipForwardLight } from "../light";
import { SkipForwardRegular } from "../regular";
import { SkipForwardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkipForward = memo(function SkipForward(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipForwardBold,
      duotone: SkipForwardDuotone,
      fill: SkipForwardFill,
      light: SkipForwardLight,
      regular: SkipForwardRegular,
      thin: SkipForwardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
