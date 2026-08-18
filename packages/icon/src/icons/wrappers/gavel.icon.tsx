import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GavelBoldIcon } from "../bold/gavel-bold.icon";
import { GavelDuotoneIcon } from "../duotone/gavel-duotone.icon";
import { GavelFillIcon } from "../fill/gavel-fill.icon";
import { GavelLightIcon } from "../light/gavel-light.icon";
import { GavelRegularIcon } from "../regular/gavel-regular.icon";
import { GavelThinIcon } from "../thin/gavel-thin.icon";

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
