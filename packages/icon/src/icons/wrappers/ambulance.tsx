import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AmbulanceBold } from "../bold";
import { AmbulanceDuotone } from "../duotone";
import { AmbulanceFill } from "../fill";
import { AmbulanceLight } from "../light";
import { AmbulanceRegular } from "../regular";
import { AmbulanceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ambulance = memo(function Ambulance(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AmbulanceBold,
      duotone: AmbulanceDuotone,
      fill: AmbulanceFill,
      light: AmbulanceLight,
      regular: AmbulanceRegular,
      thin: AmbulanceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
