import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MicroscopeBold } from "../bold";
import { MicroscopeDuotone } from "../duotone";
import { MicroscopeFill } from "../fill";
import { MicroscopeLight } from "../light";
import { MicroscopeRegular } from "../regular";
import { MicroscopeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Microscope = memo(function Microscope(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicroscopeBold,
      duotone: MicroscopeDuotone,
      fill: MicroscopeFill,
      light: MicroscopeLight,
      regular: MicroscopeRegular,
      thin: MicroscopeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
