import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotBold } from "../bold";
import { DotDuotone } from "../duotone";
import { DotFill } from "../fill";
import { DotLight } from "../light";
import { DotRegular } from "../regular";
import { DotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Dot = memo(function Dot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotBold,
      duotone: DotDuotone,
      fill: DotFill,
      light: DotLight,
      regular: DotRegular,
      thin: DotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
