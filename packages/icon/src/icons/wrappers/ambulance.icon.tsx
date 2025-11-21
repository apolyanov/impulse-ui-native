import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AmbulanceBoldIcon } from "../bold";
import { AmbulanceDuotoneIcon } from "../duotone";
import { AmbulanceFillIcon } from "../fill";
import { AmbulanceLightIcon } from "../light";
import { AmbulanceRegularIcon } from "../regular";
import { AmbulanceThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AmbulanceIcon = memo(function Ambulance(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AmbulanceBoldIcon,
      duotone: AmbulanceDuotoneIcon,
      fill: AmbulanceFillIcon,
      light: AmbulanceLightIcon,
      regular: AmbulanceRegularIcon,
      thin: AmbulanceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
