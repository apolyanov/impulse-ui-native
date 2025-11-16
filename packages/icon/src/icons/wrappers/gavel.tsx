import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GavelBold } from "../bold";
import { GavelDuotone } from "../duotone";
import { GavelFill } from "../fill";
import { GavelLight } from "../light";
import { GavelRegular } from "../regular";
import { GavelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gavel = memo(function Gavel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GavelBold,
      duotone: GavelDuotone,
      fill: GavelFill,
      light: GavelLight,
      regular: GavelRegular,
      thin: GavelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
