import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StethoscopeBold } from "../bold";
import { StethoscopeDuotone } from "../duotone";
import { StethoscopeFill } from "../fill";
import { StethoscopeLight } from "../light";
import { StethoscopeRegular } from "../regular";
import { StethoscopeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stethoscope = memo(function Stethoscope(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StethoscopeBold,
      duotone: StethoscopeDuotone,
      fill: StethoscopeFill,
      light: StethoscopeLight,
      regular: StethoscopeRegular,
      thin: StethoscopeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
