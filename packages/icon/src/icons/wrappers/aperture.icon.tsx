import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ApertureBoldIcon } from "../bold";
import { ApertureDuotoneIcon } from "../duotone";
import { ApertureFillIcon } from "../fill";
import { ApertureLightIcon } from "../light";
import { ApertureRegularIcon } from "../regular";
import { ApertureThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ApertureIcon = memo(function Aperture(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApertureBoldIcon,
      duotone: ApertureDuotoneIcon,
      fill: ApertureFillIcon,
      light: ApertureLightIcon,
      regular: ApertureRegularIcon,
      thin: ApertureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
