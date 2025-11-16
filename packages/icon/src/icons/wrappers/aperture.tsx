import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ApertureBold } from "../bold";
import { ApertureDuotone } from "../duotone";
import { ApertureFill } from "../fill";
import { ApertureLight } from "../light";
import { ApertureRegular } from "../regular";
import { ApertureThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Aperture = memo(function Aperture(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApertureBold,
      duotone: ApertureDuotone,
      fill: ApertureFill,
      light: ApertureLight,
      regular: ApertureRegular,
      thin: ApertureThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
