import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TildeBold } from "../bold";
import { TildeDuotone } from "../duotone";
import { TildeFill } from "../fill";
import { TildeLight } from "../light";
import { TildeRegular } from "../regular";
import { TildeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tilde = memo(function Tilde(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TildeBold,
      duotone: TildeDuotone,
      fill: TildeFill,
      light: TildeLight,
      regular: TildeRegular,
      thin: TildeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
