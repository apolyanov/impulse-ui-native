import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GavelBoldIcon } from "../bold";
import { GavelDuotoneIcon } from "../duotone";
import { GavelFillIcon } from "../fill";
import { GavelLightIcon } from "../light";
import { GavelRegularIcon } from "../regular";
import { GavelThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GavelIcon = memo(function Gavel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GavelBoldIcon,
      duotone: GavelDuotoneIcon,
      fill: GavelFillIcon,
      light: GavelLightIcon,
      regular: GavelRegularIcon,
      thin: GavelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
