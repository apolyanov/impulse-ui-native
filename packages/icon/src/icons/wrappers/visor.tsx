import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VisorBold } from "../bold";
import { VisorDuotone } from "../duotone";
import { VisorFill } from "../fill";
import { VisorLight } from "../light";
import { VisorRegular } from "../regular";
import { VisorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Visor = memo(function Visor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VisorBold,
      duotone: VisorDuotone,
      fill: VisorFill,
      light: VisorLight,
      regular: VisorRegular,
      thin: VisorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
